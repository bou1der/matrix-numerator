'use client'
import Image,{type StaticImageData} from "next/image";
import Star from "public/star.svg"

import AnaelMatrixSvg from "public/matrixs/anael.svg"
import MatrixForm from "~/components/matrix_form";
import { type DateSchema } from "~/lib/share/types";
import { AnaelMatrixBase } from "./matrix_base";
import { type AnaelNumbers, checkNumber, IfAcumMinus } from "~/lib/share/types/anael";
import { useState } from "react";
import { Acumulate } from "~/lib/share/const";
import { PeopleNumberTable } from "./table";

export function AnaelMatrix(){
  const [numbers, setNumbers] = useState<AnaelNumbers>()

  const OnSubmit = (data:DateSchema) =>{
    const DD = IfAcumMinus(data.date)
    const YY = IfAcumMinus(Acumulate([...data.year.toString().split("").map(Number)], {checkIgnore:true}))
    const x = IfAcumMinus(DD + YY + data.month)

    const x5 = checkNumber(DD - data.month)

    const x6 = checkNumber(DD - YY)
    const x7 = checkNumber(x5 - x6)
    const x8 = checkNumber(data.month - YY)
    const x9 = IfAcumMinus(x5 + x6 + x7 + x8)


    setNumbers({
      DD,
      MM: data.month,
      YY,
      x,
      main:{
        x5,
        x6,
        x7,
        x8,
        x9
      }
    })
  };

  return(
      <div className="w-screen min-h-screen overflow-hidden gap-12 flex flex-col justify-center items-center py-20  px-2 sm:px-10">
        <MatrixForm  OnSubmit={OnSubmit} >
          <Image src={AnaelMatrixSvg as StaticImageData} alt="" className="h-full"/>
        </MatrixForm>
        <div className="container grid grid-cols-1 gap-6 lg:gap-0 xl:grid-rows-1 xl:grid-cols-2 justify-items-center ">
          <div className="flex flex-col gap-4 w-full justify-center items-center">
            <div className="w-full flex justify-start">
              <Image
                src={Star}
                alt=""
                className="size-9"
              />
            </div>
            <h1 className="text-center text-[12px] sm:text-[20px]">
              Целостная картина человека
            </h1>
            <PeopleNumberTable numbers={numbers} />
            <div className="w-full flex justify-end"> 
              <Image
                src={Star}
                alt=""
                className="size-9"
              />
            </div>
          </div>
          <div className="order-first xl:order-last">
            <AnaelMatrixBase numbers={numbers} />
          </div>
        </div>
      </div>
  )
}
