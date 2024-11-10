import Image from "next/image"
import Link from "next/link";
import SmootraySVG from "public/smoothray.svg"
import Logo from "./logo";
import { ArrowRight, Diamond, Grid2x2, Triangle } from "lucide-react";
import { Button } from "./ui/button";
import { RequestForm } from "./requests_form";



export function Footer(){
  return (
    <div className="py-10 bg-secondary">
      <div className="w-full  px-2 py-16 sm:px-10 sm:py-20">
        <div className="size-full bg-background p-3 sm:p-12 rounded-xl flex gap-28 sm:gap-0  flex-col sm:flex-row justify-between">
          <div className="h-full flex flex-col  gap-2 sm:gap-[76px] justify-between">
            <Image
              src={SmootraySVG}
              alt=""
              className="size-9 invert"
            />
            <h1 className="max-w-[835px]">Пишите мне свои вопросы и отзывы — я всегда на связи!</h1>
          </div>
          <div className="w-full sm:max-w-32 mt-auto">
            <RequestForm>
              <Button className="w-full">
                <ArrowRight />
              </Button>
            </RequestForm>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8 px-2 sm:px-20">
        <Logo size="md"/>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-secondary-foreground ">
          <Link className="flex gap-2" href={"/ladyni"}><Triangle/> Матрица Ладини</Link>
          <Link className="flex gap-2" href={"/pifagor"}><Grid2x2/> Квадрат Пифагора</Link>
          <Link className="flex gap-2" href={"/"}><Diamond /> Кармическая марица Анаэль</Link>
        </div>
        <div className="border-t-2 border-white w-full h-0.5" />
        <p className="text-center text-[16px] text-secondary-foreground opacity-60">2024 Все права защищены</p>
      </div>
    </div>
  )
}
