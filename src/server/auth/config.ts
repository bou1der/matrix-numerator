import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer"
import { env } from "~/env";

import { db } from "~/server/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "~/server/db/schema";


declare module "next-auth" {
  interface Session extends DefaultSession {
    user:NonNullable<Awaited<ReturnType<typeof getUser >>> &
    DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

const getUser = async (id:string) =>{
  return await db.query.users.findFirst({
    where: eq(users.id, id)
  })
}

export const authConfig = {
  trustHost:true,
  callbacks: {
    async signIn({user}) {
      if (user.email === env.ADMIN_EMAIL){

        return true
      }

      return false
    },
    redirect: ({baseUrl}) =>{
      return baseUrl
    },
    session: async ({ session, user }) => {
      const existUser = await getUser(user.id);
      if( 
      existUser?.email === env.ADMIN_EMAIL && 
      (existUser.role.includes("ADMIN") || existUser.role.includes("UNKNOWN"))
      ){
        const sets = new Set(existUser.role)

        sets.add("ADMIN")
        sets.delete("UNKNOWN")
        await db.update(users).set({
          role: Array.from(sets),
        })
        .where(eq(users.id, user.id))
      }

      if(!existUser) throw new Error("Пользователь не найден")

      return {
        ...session,
        user: existUser
      }
    }  
  },
  providers: [
    EmailProvider({
      from: env.EMAIL_FROM,
      server: env.EMAIL_SERVER,
      maxAge:10 * 60
    })
  ],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  secret: env.AUTH_SECRET,
} satisfies NextAuthConfig;
