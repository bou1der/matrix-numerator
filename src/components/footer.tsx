import Link from "next/link";
import Logo from "./logo";
import { Diamond, Grid2x2, Triangle } from "lucide-react";



export function Footer(){
  return (
    <div className="py-10 bg-secondary">
      <div className="flex flex-col space-y-8 px-2 sm:px-20">
        <Logo size="md"/>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-secondary-foreground ">
          <Link className="flex gap-2" href={"/ladyni"}><Triangle/> Матрица Ладини</Link>
          <Link className="flex gap-2" href={"/"}><Grid2x2/> Квадрат Пифагора</Link>
          <Link className="flex gap-2" href={"/"}><Diamond /> Кармическая марица Анаэль</Link>
        </div>
        <div className="border-t-2 border-white w-full h-0.5" />
        <p className="text-center text-[16px] text-secondary-foreground opacity-60">2024 Все права защищены</p>
      </div>
    </div>
  )
}
