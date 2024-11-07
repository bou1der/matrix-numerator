import Image from "next/image"
import Star from "../../../public/star.svg"
import PersonImg from "../../../public/person.png"

export default function InfoBlock(){
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
    // <div className="min-w-screen min-h-screen ">
    //   <div className="w-full h-full flex flex-row flex-wrap-reverse gap-9 md:gap-40 items-center justify-between px-2 md:px-10 py-16 md:py-20">
    //
    //     <div className="h-full flex flex-col gap-8 max-w-[632px]">
    //       <div className="w-full flex justify-start"> 
    //         <Image
    //           src={Star}
    //           alt=""
    //           className="size-9"
    //         />
    //       </div>
    //       <div className="flex flex-col gap-6">
    //         <h1>
    //           <b className="italic">Калькуляторы,</b> которые раскрывают вашу судьбу
    //         </h1>
    //         <p>
    //           На нашем сайте представлены четыре уникальных
    //           калькулятора,которые помогут вам раскрыть тайны
    //           нумерологии и понять свое место в мире. 
    //            <b> Матрица Ладини</b> позволяет вам исследовать свою личную матрицу,
    //           выявляя сильные и слабые стороны вашей натуры. 
    //           <b> Квадрат Пифагора</b> открывает двери к пониманию чисел и их влияния
    //           на вашу жизнь, предлагая глубокий анализ вашего
    //           внутреннего состояния.
    //         </p>
    //         <p>
    //           <b> Кармическая матрица Анаэль </b> помогает выявить кармические задачи и уроки,
    //           которые вы пришли пройти, чтобы достичь гармонии и роста.
    //            А <b> Расчет денежного канала </b> фокусируется на финансовом аспекте вашей жизни,
    //           подсказывая, как привлечь изобилие и улучшить свою финансовую энергетику.
    //           Эти инструменты станут вашим верным помощником в поиске гармонии и понимания.
    //         </p>
    //       </div>
    //       <div className="w-full flex justify-end"> 
    //         <Image
    //           src={Star}
    //           alt=""
    //           className="size-9"
    //         />
    //       </div>
    //     </div>
    //
    //     <div className="grow h-screen bg-primary/50 border-2 rounded-2xl border-primary min-w-[300px] min-h-[300px] max-h-[560px]">
    //       hello
    //     </div>
    //
    //   </div>
    // </div>
