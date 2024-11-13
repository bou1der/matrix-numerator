import {
  type DefaultSession,
  type NextAuthOptions,
  getServerSession,
} from "next-auth";

import { TRPCError } from "@trpc/server/unstable-core-do-not-import";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "~/env";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    redirect({ baseUrl }) {
      return baseUrl;
    },
    session: ({ session }) => {
      if (session.user?.email !== env.MAIN_ADMIN_EMAIL) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
        });
      }

      return session;
    },
  },

  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      authorize(credentials) {
        if (!credentials) {
          throw new Error("Не указаны данные для авторизации.");
        }

        if (
          credentials.email !== env.MAIN_ADMIN_EMAIL &&
          credentials.password !== env.MAIN_ADMIN_EMAIL
        ) {
          throw new Error("Неверный логин или пароль");
        }

        return {
          id: "admin",
          email: credentials.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  secret: env.NEXTAUTH_SECRET,
  debug: env.NODE_ENV === "development",
};

export const getServerAuthSession = () => getServerSession(authOptions);
export const getNonNullableServerAuthSession = async () =>
(await getServerSession(authOptions))!;

