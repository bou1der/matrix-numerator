'use client'

import { ReactNode, useState } from "react"
import { CollapsibleTrigger,Collapsible, CollapsibleContent } from "./ui/collapsible";
import Smoothray from "public/smoothray_inverted.svg"
import { cn } from "~/lib/utils";
import Image, { type StaticImageData } from "next/image";



export function Collapsed({ title, children, className}:
  {
    title:string
    children:ReactNode,
    className?:string,
  }){
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn(className, "px-6 py-7 bg-white rounded-xl")}>
      <CollapsibleTrigger className="flex justify-between items-center w-full">
        <div className="truncate w-5/6 pr-5 text-start">
          <p className=" w-full text-start text-[14px] sm:text-xl">{title}</p>
        </div>
        <div className="bg-primary min-h-6 min-w-6 size-6 sm:size-9  flex rounded-md  justify-center">
          <Image
            src={Smoothray as StaticImageData}
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
