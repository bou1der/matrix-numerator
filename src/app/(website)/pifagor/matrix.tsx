'use client'
import Image, { type StaticImageData } from "next/image";
import PifagorSvg  from "public/matrixs/pifagor.svg"
import RadialStar from "public/radial-star.svg"
import ComboStar  from "public/combostar.svg"

import MatrixForm from "~/components/matrix_form";

import { DateSchema } from "~/lib/share/types";
import { useState } from "react";
import { PifagorBase } from "./matrix_base";
import { PifagorNumbers } from "~/lib/share/types/pifagor";
import { Acumulate } from "~/lib/share/const";


export function PifagorMatrix(){
  const [numbers, setNumbers] = useState<PifagorNumbers>()

  const OnSubmit = (data:DateSchema) =>{
    const arr = `${data.date}${data.month}${data.year}`.split("").map(Number)
    const first = Acumulate(arr, {checkIgnore:true})
    const second = Acumulate(first.toString().split("").map(Number), {checkIgnore:true})
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
    <div className="w-screen min-h-screen overflow-hidden gap-12 flex flex-col justify-center items-center py-20 px-2 sm:px-10">
      <MatrixForm OnSubmit={OnSubmit}>
        <Image className=" size-[360px]" src={PifagorSvg as StaticImageData} alt="" />
      </MatrixForm>
      <div className="w-full flex justify-center sm:justify-between items-end">
        <Image src={ComboStar as StaticImageData} alt="" className="hidden sm:block" />
        <PifagorBase numbers={numbers}/>
        <Image src={RadialStar as StaticImageData} alt="" className="hidden sm:block"/>
      </div>
    </div>
  )
}
