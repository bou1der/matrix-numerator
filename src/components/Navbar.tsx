import { AlignRight, Diamond, Grid2x2, Triangle } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";



export function Navbar(){
  return (
    <div className="mt-2.5 sm:mt-5 px-2 sm:px-12  w-full h-14 absolute z-20 ">
      <div className="h-full w-full flex flex-row items-center justify-between rounded-3xl bg-white px-4">
        <Link href="/">
          <Logo size="sm" invert />
        </Link>
        <div className="flex flex-row gap-8">
          <Link className="hidden lg:flex gap-2" href={"/ladyni"}><Triangle/> Матрица Ладини</Link>
          <Link className="hidden lg:flex gap-2" href={"/pifagor"}><Grid2x2/> Квадрат Пифагора</Link>
          <Link className="hidden lg:flex gap-2" href={"/"}><Diamond /> Кармическая марица Анаэль</Link>
        </div>
        <AlignRight />
      </div>
    </div>
  )
}
