'use client'
import Image from "next/image";
import MatrixForm from "~/components/matrix_form";
import PifagorSvg  from "public/matrixs/pifagor.svg"
import { DateSchema } from "~/lib/share/types";
import { useState } from "react";
import { PifagorBase } from "./matrix_base";
import { PifagorNumbers } from "~/lib/share/types/pifagor";
import { Acumulate } from "~/lib/share/const";
import { secondsInDay } from "date-fns/constants";


export function PifagorMatrix(){
  const [numbers, setNumbers] = useState<PifagorNumbers>()

  const OnSubmit = (data:DateSchema) =>{
    const arr = `${data.date}${data.month}${data.year}`.split("").map(Number)
    const first = Acumulate(arr, {checkIgnore:true})
    const second = Acumulate(first.toString().split("").map(Number), {checkIgnore:true})

    console.log(first)
    console.log(Number(first.toString().split("")[0]))

    const third = first - Number(first.toString().split("")[0])

    const four = Acumulate(third.toString().split("").map(Number), {checkIgnore:true})

    const fate = Acumulate(first.toString().split("").map(Number))


    setNumbers({
      birhday:[data.date, data.month, data.year],
      all: [
        ...arr,
        ...first.toString().split("").map(Number),
        ...second.toString().split("").map(Number),
        ...third.toString().split("").map(Number),
        ...four.toString().split("").map(Number)
      ].sort(),
      extra:[first, second, third, four],
      fate
    })
  }
  return (
    <div className="w-screen min-h-screen overflow-hidden gap-12 flex flex-col justify-center items-center py-20 px-10">
      <MatrixForm OnSubmit={OnSubmit}>
        <Image className=" size-[360px]" src={PifagorSvg} alt="" />
      </MatrixForm>
      <PifagorBase numbers={numbers}/>
    </div>
  )
}
