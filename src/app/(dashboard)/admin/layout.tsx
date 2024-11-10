import { redirect } from "next/navigation"
import { ReactNode } from "react"
import { auth } from "~/server/auth"



export default async function AdminLayout({children}:
  {
    children:ReactNode
  }){

  const session = await auth()

  if(!session || !session.user.role.includes("ADMIN")){
    redirect("/api/auth/signin")
  }

  return(
    <>
      {children}
    </>
  )
}
