'use client'

import { Dispatch, SetStateAction, useState } from "react";
import MatrixForm from "~/components/matrix_form";
import LadyniMatrixSvg from "public/matrix_ladyni.svg"
import { PeopleNumberTable } from "./table";
import { DateSchema } from "~/lib/share/types";
import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni";
import Image from "next/image"
import Star from "public/star.svg"
import { BaseMatrix } from "./matrix_base";
import { Acumulate } from "~/lib/share/const";
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
      <div className="w-screen min-h-screen overflow-hidden gap-12 flex flex-col justify-center items-center py-20 px-10">
        <MatrixForm  OnSubmit={OnSubmit} >
          <Image src={LadyniMatrixSvg} alt="" className="h-full"/>
        </MatrixForm>
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
          <div className="flex flex-col gap-6 items-center">
            <div className="flex justify-center items-center gap-6 z-20">
              <Label htmlFor="switch-channel">Расчет денежного канала</Label>
              <Switch id="switch-channel" checked={moneyChannel} onCheckedChange={setMoneyChannel} />
            </div>

            <BaseMatrix numbers={numbers} moneyChannel={moneyChannel} />
            <p className="order-last">16 - 8 - 1975</p>
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

  setNumbers(matrixNumbers)
}
