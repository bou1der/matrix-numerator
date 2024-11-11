import Image, {type StaticImageData} from "next/image"
import logo from "public/logo.svg"
import logoInvert from "public/logo_invert.svg"
import { cn } from "~/lib/utils"


export default function Logo({ className, invert }:
  {
    invert?:true
    className?:string
  }){
  return (
    <Image 
      src={invert ? logo as StaticImageData : logoInvert as StaticImageData}
      className={cn(className, "")}
      alt="Soul key"
    />
  )
}
