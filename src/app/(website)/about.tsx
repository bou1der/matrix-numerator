import Image from "next/image"
import PersonImg from "../../../public/person.png"
import Star from "../../../public/star.svg"

export default function AboutMeBlock(){
  return(
    <div className="overflow-hidden min-w-screen flex flex-col  lg:grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1  justify-items-center content-stretch min-h-screen gap-9 md:gap-40 px-2 md:px-10 py-16 md:py-20">
        <div className="h-full flex flex-col justify-between gap-8 max-w-[632px]">
          <div className="w-full flex justify-start"> 
            <Image
              src={Star}
              alt=""
              className="size-9"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1>
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

        <div className="flex justify-center items-center order-first lg:order-last">
          <div className="relative">
            <Image
              src={PersonImg}
              alt=""
              className="object-fill"
            />
            <div className="w-full h-20 absolute blur-2xl bg-background bottom-0" />
          </div>
        </div>

    </div>
  )
}
