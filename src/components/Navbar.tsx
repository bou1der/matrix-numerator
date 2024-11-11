import { AlignRight, Diamond, Grid2x2, Shield, Triangle } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { auth } from "~/server/auth";



export async function Navbar(){
  const session = await auth()

  return (
    <div className="mt-2.5 sm:mt-5 px-2 sm:px-12  w-full h-14 absolute z-20 ">
      <div className="h-full w-full flex flex-row items-center justify-between rounded-3xl bg-white px-4">
        <Link href="/">
          <Logo size="sm" invert />
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
              <SheetTitle><Logo size="md" invert/></SheetTitle>
            </SheetHeader>
            <div className="w-full flex flex-col items-center gap-6">
              <Link className="flex gap-2" href={"/ladyni"}><Triangle/> Матрица Ладини</Link>
              <Link className="flex gap-2" href={"/pifagor"}><Grid2x2/> Квадрат Пифагора</Link>
              <Link className="flex gap-2" href={"/anael"}><Diamond /> Кармическая марица Анаэль</Link>
              {
                session?.user.role.includes("ADMIN") ? <Link className="flex gap-2" href={"/admin"}><Shield />Админ панель</Link> : undefined
              }
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
