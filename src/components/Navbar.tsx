import { AlignRight, Diamond, Grid2x2, Shield, Triangle } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { getServerSession } from "next-auth";



export async function Navbar(){
  const session = await getServerSession()

  return (
    <div className="mt-2.5 sm:mt-5 px-2 sm:px-12  w-full h-14 absolute z-20 ">
      <div className="h-full w-full flex flex-row items-center justify-between rounded-3xl bg-white px-4">
        <Link href="/">
          <Logo invert />
        </Link>
        <div className="flex flex-row gap-8">
          <Link className="hidden lg:flex gap-2" href={"/ladyni"}><Triangle/> Матрица Ладини</Link>
          <Link className="hidden lg:flex gap-2" href={"/pifagor"}><Grid2x2/> Квадрат Пифагора</Link>
          <Link className="hidden lg:flex gap-2" href={"/anael"}><Diamond /> Кармическая марица Анаэль</Link>
        </div>
        <Sheet>
          <SheetTrigger>
            <AlignRight />
          </SheetTrigger>
          <SheetContent className="space-y-6">
            <SheetHeader>
              <SheetTitle><Logo invert/></SheetTitle>
            </SheetHeader>
            <div className="w-full flex flex-col items-center gap-6">
              <Link className="flex gap-8 w-full justify-start items-center " href={"/ladyni"}><Triangle className="size-6"/><p className="w-full text-left text-[12px] sm:text-[16px]"> Матрица Ладини</p></Link>
              <Link className="flex gap-8 w-full justify-start items-center " href={"/pifagor"}><Grid2x2 className="size-6"/><p className="w-full text-left text-[12px] sm:text-[16px]"> Квадрат Пифагора</p></Link>
              <Link className="flex gap-8 w-full justify-start items-center " href={"/anael"}><Diamond  className="size-6"/><p className="w-full text-left text-[12px] sm:text-[16px]">Кармическая марица Анаэль</p></Link>
              {                                 
                session ? <Link className="flex gap-8 w-full items-center" href={"/admin"}><Shield className="size-6" /><p className="w-full text-left text-[12px] sm:text-[16px]">Админ панель</p></Link> : undefined
              }
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
