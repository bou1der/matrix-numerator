import Image, { type StaticImageData} from "next/image"

import PersonImg from "/public/person.png"
import Star from "/public/star.svg"

export default function AboutMeBlock(){
  return(
    <div className="overflow-hidden min-w-screen flex flex-col  lg:grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1  justify-items-center content-stretch gap-9 md:gap-40">
        <div className="size-full flex flex-col  justify-center items-center gap-8 lg:max-w-[632px]">
          <div className="w-full flex justify-start"> 
            <Image
              src={Star as StaticImageData}
              alt=""
              className="size-9"
            />
          </div>
          <div className="flex flex-col  gap-6 px-2">
            <h1 className="font-medium">
              Обо мне
            </h1>
            <p>
              Меня зовут <b> Оксана Потанина</b>, и я посвятила свою жизнь изучению и практике нумерологии.
              С многолетним опытом за плечами я помогла многим людям понять себя глубже,
              раскрыть скрытые возможности и найти ответы на важные жизненные вопросы.
              Моя цель — не просто делиться знаниями, но быть вашим поддерживающим наставником
              на пути к самопознанию и гармонии.
            </p>
            <p>
              Моя работа основана на индивидуальном подходе к каждому клиенту, чтобы вы могли получить точные и ценные инсайты,
              необходимые для уверенных шагов вперед. Ваша уникальная история — моя мотивация для
              создания персональных рекомендаций и поддерживающих консультаций.
            </p>
          </div>
          <div className="w-full flex justify-end"> 
            <Image
              src={Star}
              alt=""
              className="size-9"
            />
          </div>
        </div>

        <div className=" size-full order-first lg:order-last">
          <div className="flex justify-center items-center object-fill relative size-auto">
            <Image
              src={PersonImg as StaticImageData}
              alt=""
              className="size-full"
            />
            <div className="w-full h-52 absolute  top-0 bg-gradient-to-b from-background to-white/0" />
            <div className="w-52 h-full absolute hidden lg:block  left-0 top-0 bg-gradient-to-r from-background to-white/0" />
            <div className="w-full h-52 absolute  bottom-0 bg-gradient-to-t from-background to-white/0" />

          {/*
            <div className="w-full h-full  absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-white/0  to-background/70  bottom-0 z-[2]" />
            <div className="w-full h-full border-[40px] border-background blur-2xl  absolute   bottom-0 z-[3]" />
          */}
          </div>
        </div>

    </div>
  )
}
