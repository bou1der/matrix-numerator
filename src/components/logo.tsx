import Image from "next/image"
import logo from "../../public/logo.svg"
import logoInvert from "../../public/logo_invert.svg"
import { cn } from "~/lib/utils"

type Sizes = "sm" | "md"

export default function Logo({size, invert}:
  {
    size:Sizes
    invert?:true
  }){
  return (
    <div className={""}>
      <div className="flex gap-2.5 justify-center items-center">
        <Image 
          src={invert ? logoInvert : logo}
          alt="Soul key"
          className={`size-full ${ size === "md" ? "w-6" : "mt-px w-[14px]"}`}
        />
        <div className={cn("text-nowrap flex flex-col items-start justify-center text-secondary-foreground", 
          invert ? "text-primary" : "text-secondary-foreground"
        )}>
          <h1 className={`font-merriweather  ${size === "md" ? "text-3xl" : "text-[16px]" }`}>SOUL KEY</h1>
          <h3 className={`font-bold ${size === "md" ? "" : "text-[7px]"}`}><b className="italic">BY</b> Oksana Potanina</h3>
        </div>
      </div>
    </div>
  )
}
