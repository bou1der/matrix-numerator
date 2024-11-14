import Image, { type StaticImageData} from "next/image"

import PersonImg from "public/person.png"
import Star from "public/star.svg"
// grid justify-items-center 2xl:justify-items-start grid-cols-1 grid-rows-2  2xl:grid-cols-2 2xl:grid-rows-1
export default function AboutMeBlock(){
  return(
    <div className="">
      <div className="flex flex-col-reverse 2xl:flex-row justify-between relative max-w-[1920px] mx-auto">
        <div className="max-w-[740px] flex flex-col gap-8 justify-center py-20 px-10 mx-auto 2xl:m-0">
          <div className="w-full flex justify-start "> 
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
              Меня зовут <b>Оксана Потанина</b>, и я практикующий нумеролог с семилетним опытом и более 1000 проведёнными консультациями. Изучила все ключевые
              системы нумерологии: Матрицу Ладини, Квадрат Пифагора, ведическую, кармическую и квантовую нумерологию, и уникально совмещаю их с работой
              с эфирными маслами, создавая ресурсные составы и проводя арома-игры. Я единственный нумеролог, который объединяет силу чисел и ароматерапии
              для поддержки и гармонизации клиентов.
            </p>
            <p>
              В своих консультациях я также использую астрологические знания, чтобы предложить конкретные действия по планетам, помогающие клиентам достигать
              новых финансовых и личных высот. С помощью нумерологии можно рассчитать не только характер, карму и ключевые периоды, но и анализировать детали,
              такие как номер телефона и адрес проживания, раскрывающие ваши возможности и причины текущих событий в жизни. Цветотерапия и выбор парфюма,
              основанные на дате рождения, также способствуют вашему личному росту и успеху.
            </p>
            <p>
              Каждая консультация включает энергонумерологические и астрозажигающие действия
              для усиления всех сфер жизни, а также уникальную
              прогностику, чтобы знать лучшие дни
              для начала новых дел и принятия решений.
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

        <div className=" shrink-0 grow w-auto">
          <div className="relative h-full">
            <Image
              src={PersonImg as StaticImageData}
              alt=""
              className="size-full lg:aspect-video lg:object-contain object-center 2xl:object-right  2xl:mr-0 max-h-[1440px] "
            />
            <div className="w-full h-52 absolute  top-0 bg-gradient-to-b from-background to-white/0" />
            <div className="w-32 h-full absolute hidden 2xl:block left-0 top-0 bg-gradient-to-r from-background to-white/0" />
            <div className="w-full h-52 absolute  bottom-0 bg-gradient-to-t from-background to-white/0" />

          {/*
            <div className="w-full h-full  absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-white/0  to-background/70  bottom-0 z-[2]" />
            <div className="w-full h-full border-[40px] border-background blur-2xl  absolute   bottom-0 z-[3]" />
          */}
          </div>
        </div>
      </div>
    </div>
  )
}
