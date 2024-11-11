'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "next-auth/react"



export default function SignoutPage(){
  const router = useRouter()
  useEffect(() =>{
    signOut({ redirect:false })
      .then(() => router.push("/"))
      .catch(() => router.push("/"))
  }, [router])

  return null
}
