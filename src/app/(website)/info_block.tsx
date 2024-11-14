'use client'
import Image, {type StaticImageData} from "next/image"
import Star from "../../../public/star.svg"
import Anael from "public/matrixs/anael.svg"
import Ladyni from "public/matrixs/ladyni.svg"
import Channel from "public/matrixs/money-channel.svg"
import AutoPlay from "embla-carousel-autoplay"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "~/components/ui/carousel"
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
    <div className="min-h-screen container mx-auto flex flex-col-reverse py-16 xl:p-0 xl:flex-row justify-center items-center gap-5">
        <div className="xl:w-1/2 space-y-8">
          <div> 
            <Image
              src={Star as StaticImageData}
              alt=""
              className="size-9"
            />
          </div>
           <div className="space-y-6 px-3">
             <h1 className="font-medium">
               <b className="italic text-2xl sm:text-5xl">Калькуляторы,</b> которые раскрывают вашу судьбу
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
              src={Star as StaticImageData}
              alt=""
              className="size-9"
            />
          </div>
        </div>

        <div className="xl:w-1/2">
          <p className="text-center">16 - 8 - 1975</p>
          <Carousel plugins={[
            AutoPlay({
              delay:7000
            })
        ]} setApi={setApi}>
            <CarouselContent>
              <CarouselItem className="">
                <Image src={Ladyni as StaticImageData} alt="" className="mx-auto" />
              </CarouselItem>
              <CarouselItem className="">
                <Image src={Anael as StaticImageData} alt="" className="mx-auto" />
              </CarouselItem>
              <CarouselItem className="">
                <Image src={Channel as StaticImageData} alt="" className="mx-auto" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="flex my-4 items-center justify-center gap-4 ">
            <div onClick={() => api?.scrollTo(0)} className={`${current === 0 ? "border-primary/100" : ""} cursor-pointer border-2 border-primary/0 transition-colors duration-200 bg-[#DACEE8] size-3 rounded-md before:size-3 before:bg-black`}/>
            <div onClick={() => api?.scrollTo(1)} className={`${current === 1 ? "border-primary/100" : ""} cursor-pointer border-2 border-primary/0 transition-colors duration-200 bg-[#DACEE8] size-3 rounded-md before:size-3 before:bg-black`}/>
            <div onClick={() => api?.scrollTo(2)} className={`${current === 2 ? "border-primary/100" : ""} cursor-pointer border-2 border-primary/0 transition-colors duration-200 bg-[#DACEE8] size-3 rounded-md before:size-3 before:bg-black`}/>
          </div>
        </div>

    </div>

  )
}
