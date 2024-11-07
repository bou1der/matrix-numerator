import Image from "next/image";
import starLong from "../../../public/long_star.svg"
import matrix from "../../../public/matrix_animate.svg"
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function WelcomeBlock(){
  return (
    <>
      <div className="w-screen overflow-hidden relative h-screen bg-secondary">

        <div className="z-10 w-full h-full relative flex-col flex  items-center justify-center gap-6">
          <Image
            src={starLong}
            alt=""
          />
          <div className="w-full flex flex-col justify-center items-center gap-6 px-2">
            <h1 className="text-secondary-foreground text-center max-w-[832px] ">
              Раскройте тайны с «<b className="italic">Ключом Души</b>» — уникальные расчеты для вашего пути
            </h1>
            <p className="text-secondary-foreground max-w-[832px] text-center">
              Откройте для себя персональную нумерологическую консультацию — ваш путь к самопознанию и гармонии начинается здесь
            </p>
          </div>
          <div className="w-full px-2 h-10 flex justify-center">
            <Button className="w-full sm:max-w-[370px] h-full rounded-xl">Записаться на консультацию</Button>
          </div>
        </div>

        <div className="hidden absolute h-full lg:flex  items-center justify-center w-1/12 top-0 -left-14">
          <SpinMatrix className=" lg:min-w-[512px] xl:min-w-[720px] 2xl:min-w-[820px] min-h-[512px] absolute"/>
        </div>
        <div className="hidden absolute h-full lg:flex  items-center justify-center w-1/12 top-0 -right-14">
          <SpinMatrix className=" lg:min-w-[512px] xl:min-w-[720px] 2xl:min-w-[820px] min-h-[512px] absolute"/>
        </div>
        <div className=" flex absolute h-1/12 w-full  lg:hidden  items-center justify-center -top-12">
          <SpinMatrix className=" min-w-[324px] min-h-[512px] absolute"/>
        </div>
      </div>
    </>
  )
}

function SpinMatrix({className}:
  {
    className?:string
  }){
  return (
    <Image
      className={cn(className,"animate-spin duration-7500")}
      src={matrix}
      alt=""
    />
  )
}
