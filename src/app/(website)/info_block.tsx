'use client'
import Image from "next/image"
import Star from "../../../public/star.svg"
import Anael from "public/matrixs/anael.svg"
import Ladyni from "public/matrixs/ladyni.svg"
import Channel from "public/matrixs/money-channel.svg"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "~/components/ui/carousel"
import { useEffect, useState } from "react"

export default function InfoBlock(){
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  useEffect(()=>{
    if(!api) return
    api.on("select", () =>{
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

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
               <b className="italic">Калькуляторы,</b> которые раскрывают вашу судьбу
             </h1>
             <p>
               На нашем сайте представлены четыре уникальных
               калькулятора,которые помогут вам раскрыть тайны
               нумерологии и понять свое место в мире. 
                <b> Матрица Ладини</b> позволяет вам исследовать свою личную матрицу,
               выявляя сильные и слабые стороны вашей натуры. 
               <b> Квадрат Пифагора</b> открывает двери к пониманию чисел и их влияния
               на вашу жизнь, предлагая глубокий анализ вашего
               внутреннего состояния.
             </p>
             <p>
               <b> Кармическая матрица Анаэль </b> помогает выявить кармические задачи и уроки,
               которые вы пришли пройти, чтобы достичь гармонии и роста.
                А <b> Расчет денежного канала </b> фокусируется на финансовом аспекте вашей жизни,
               подсказывая, как привлечь изобилие и улучшить свою финансовую энергетику.
               Эти инструменты станут вашим верным помощником в поиске гармонии и понимания.
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

        <div className="flex flex-col justify-center items-center order-first lg:order-last">
          <Carousel setApi={setApi}>
            <CarouselContent>
              <CarouselItem className="w-full flex justify-center">
                <Image src={Ladyni} alt="" className="object-fill" />
              </CarouselItem>
              <CarouselItem className="w-full flex justify-center">
                <Image src={Anael} alt="" className="object-fill" />
              </CarouselItem>
              <CarouselItem className="w-full flex justify-center">
                <Image src={Channel} alt="" className="object-fill" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="flex items-center gap-4">
            <div className={`${current === 0 ? "border-primary/100" : ""} border-2 border-primary/0 transition-colors duration-200 bg-[#DACEE8] size-3 rounded-md before:size-3 before:bg-black`}/>
            <div className={`${current === 1 ? "border-primary/100" : ""} border-2 border-primary/0 transition-colors duration-200 bg-[#DACEE8] size-3 rounded-md before:size-3 before:bg-black`}/>
            <div className={`${current === 2 ? "border-primary/100" : ""} border-2 border-primary/0 transition-colors duration-200 bg-[#DACEE8] size-3 rounded-md before:size-3 before:bg-black`}/>
          </div>
        </div>

    </div>

  )
}
