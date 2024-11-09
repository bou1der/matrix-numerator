'use client'

import { ReactElement, ReactNode, useState } from "react"
import { CollapsibleTrigger,Collapsible, CollapsibleContent } from "./ui/collapsible";
import Smoothray from "public/smoothray.svg"
import { cn } from "~/lib/utils";
import Image from "next/image";



export function Collapsed({ title, children, className}:
  {
    title:string
    children:ReactNode,
    className?:string,
  }){
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn(className, "px-6 py-7 bg-white rounded-xl")}>
      <CollapsibleTrigger className="flex gap-6 justify-between items-center w-full">
        <div className="truncate">
          <p className=" text-[14px] sm:text-xl">{title}</p>
        </div>
        <div className="bg-primary size-6 sm:size-9  flex rounded-md  justify-center">
          <Image
            src={Smoothray}
            alt=""
            className="transition-transform duration-200" 
            style={{
              transform: isOpen ? `rotate(90deg)` : "none",
            }}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className=" border-none py-2 overflow-hidden mt-2 border-t-2 transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}