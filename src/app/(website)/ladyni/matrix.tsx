'use client'

import { Dispatch, SetStateAction, useState } from "react";
import MatrixForm from "~/components/matrix_form";
import LadyniMatrixSvg from "public/matrix_ladyni.svg"
import { PeopleNumberTable } from "./table";
import { DateSchema } from "~/lib/share/types";
import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni";
import Image, { type StaticImageData } from "next/image"
import Star from "public/star.svg"
import { BaseMatrix } from "./matrix_base";
import { Acumulate, IfAcumulate } from "~/lib/share/const";
import { Switch } from "~/components/ui/switch";
import { Label } from "~/components/ui/label";



export default function LadyniMatrix(){
  const [numbers, setNumbers] = useState<LadyniMatrixNumbers | undefined>()
  const [moneyChannel, setMoneyChannel] = useState(false)

  const OnSubmit = (data:DateSchema) =>{
    CalculateLadyniNumbers(data, setNumbers)
    return
  };

  return (
    <>
      <div className="w-screen min-h-screen overflow-hidden gap-12 flex flex-col justify-center items-center py-20 px-2 sm:px-10">
        <div className="container w-full">
          <MatrixForm  OnSubmit={OnSubmit} >
            <Image src={LadyniMatrixSvg as StaticImageData} alt="" className="h-full"/>
          </MatrixForm>
          <div className="w-full grid grid-cols-1 gap-6 lg:gap-0 lg:grid-rows-1 lg:grid-cols-2 justify-items-center ">
            <div className="flex flex-col gap-4 w-full justify-between items-center">
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
            <div className="flex flex-col gap-6 items-center">
              <div className="flex justify-center items-center gap-6 z-20">
                <Label htmlFor="switch-channel">Расчет денежного канала</Label>
                <Switch id="switch-channel" checked={moneyChannel} onCheckedChange={setMoneyChannel} />
              </div>

              <BaseMatrix numbers={numbers} moneyChannel={moneyChannel} />
              <p className="order-last">{numbers ? `${numbers.origin.day} - ${numbers.origin.month} - ${numbers.origin.year}` : "? - ? - ????"}</p>
            </div>
          </div>
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
    origin:{
      day:data.date,
      ...data
    },
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
      x7:IfAcumulate(x6 + x5),
      x8:IfAcumulate(IfAcumulate(x + x5) + x),
      x9:IfAcumulate(x + x5),
      x10:IfAcumulate(MM + x5),
      x11:IfAcumulate(IfAcumulate(MM + x5) + MM),
      x12:IfAcumulate(YY + x5),
      x13:IfAcumulate(IfAcumulate(YY + x5) + YY),
      x14:IfAcumulate(DD + x5),
      x15:IfAcumulate(IfAcumulate(DD + x5) + DD),
      x16:IfAcumulate(x3 + x6),
      x17:IfAcumulate(IfAcumulate(x3 + x6) + x3),
      x18:IfAcumulate(x2 + x6),
      x19:IfAcumulate(IfAcumulate(x2 + x6) + x2),
      x20:IfAcumulate(x4 + x6),
      x21:IfAcumulate(IfAcumulate(x4 + x6) + x4),
      x22:IfAcumulate(x1 + x6),
      x23:IfAcumulate(IfAcumulate(x1 + x6) + x1),
    }
  }

  setNumbers(matrixNumbers)
}
