import { redirect } from "next/navigation"
import { auth } from "~/server/auth"
import LoginComplete from "./complete"
import SigninForm from "./signin"

export default async function SigninPage({ searchParams }:
  {
    searchParams:{
      complete:string | undefined
    }
  }){

  const { complete } = await searchParams;

  const session = await auth()

  if(session){
    redirect("/")
  }


  if(complete === "true"){
    return <LoginComplete />
  } 

  return <SigninForm/>

}

