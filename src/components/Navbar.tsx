import { AlignRight, Diamond, Grid2x2, Triangle } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";



export function Navbar(){
  return (
    <div className="z-10 mt-2.5 sm:mt-5 px-2 sm:px-12  w-full h-14 absolute ">
      <div className="h-full w-full flex flex-row items-center justify-between rounded-3xl bg-white px-4">
        <Logo size="sm" invert />
        <div className="flex flex-row gap-8">
          <Link className="hidden lg:flex gap-2" href={"/"}><Triangle/> Матрица Ладини</Link>
          <Link className="hidden lg:flex gap-2" href={"/"}><Grid2x2/> Квадрат Пифагора</Link>
          <Link className="hidden lg:flex gap-2" href={"/"}><Diamond /> Кармическая марица Анаэль</Link>
        </div>
        <AlignRight />
      </div>
    </div>
  )
}
