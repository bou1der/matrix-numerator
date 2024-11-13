import Link from "next/link"
import { ReactNode } from "react"
import Logo from "~/components/logo"
import { Sidebar } from "./sidebar"



export default function AdminLayout({children}:
  {
    children:ReactNode
  }){


  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col  justify-between  bg-gray-200">
      <div className="w-full h-14 px-5 flex justify-between bg-white"><Link href="/" className="flex justify-center items-center" ><Logo invert/></Link> <Sidebar mobile /></div>

      <div className="flex flex-row gap-6 h-[100%] p-2 sm:px-10 sm:py-12">
        <Sidebar/>
        <div className="size-full bg-white rounded-md p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
