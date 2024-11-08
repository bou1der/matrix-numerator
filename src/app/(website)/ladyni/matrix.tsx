'use client'

import { Dispatch, SetStateAction, useState } from "react";
import MatrixForm from "~/components/matrix_form";
import { PeopleNumberTable } from "~/components/people_numbers";
import { DateSchema } from "~/lib/share/types";
import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni";
import Image from "next/image"
import Star from "public/star.svg"
import { BaseMatrix } from "~/components/matrix_base";
import { Acumulate } from "~/lib/share/const";



export default function LadyniMatrix(){
  const [numbers, setNumbers] = useState<LadyniMatrixNumbers | undefined>()

  const OnSubmit = (data:DateSchema) =>{
    CalculateLadyniNumbers(data, setNumbers)
    return
  };

  return (
    <>
      <div className="w-screen min-h-screen overflow-hidden gap-12 flex flex-col justify-center items-center py-20 px-10">
        <MatrixForm  OnSubmit={OnSubmit} />
        <div className="w-full grid grid-cols-1 gap-6 lg:gap-0 lg:grid-rows-1 lg:grid-cols-2 justify-items-center ">
          <div className="flex flex-col gap-4 justify-start items-center">
            <div className="w-full flex justify-start"> 
              <Image
                src={Star}
                alt=""
                className="size-9"
              />
            </div>
            <PeopleNumberTable numbers={numbers} />
            <div className="w-full flex justify-end"> 
              <Image
                src={Star}
                alt=""
                className="size-9"
              />
            </div>
          </div>
          <BaseMatrix numbers={numbers} />
        </div>
      </div>
    </>
  )
}

function CalculateLadyniNumbers(data:DateSchema, setNumbers:Dispatch<SetStateAction<LadyniMatrixNumbers | undefined>> ){
  const YY = Acumulate([data.year]);
  const MM = Number(data.month);
  const DD = Number(data.date) > 22 ?
    Acumulate([Number(data.date)])
    : Number(data.date)

  const x = Acumulate([DD, MM, YY])

  const x1 = Acumulate([x, DD])
  const x2 = Acumulate([MM, DD])
  const x3 = Acumulate([MM, YY])
  const x4 = Acumulate([x, YY])

  const x5 = Acumulate([DD, MM, YY, x])
  const x6 = Acumulate([x1, x2, x3, x4])

  const matrixNumbers: LadyniMatrixNumbers = {
    special:{
      YY,
      MM,
      DD,
      x
    },
    main:{
      x1,
      x2,
      x3,
      x4,
      x5,
      x6,
    }
  }

  console.log(matrixNumbers)
  setNumbers(matrixNumbers)
}
