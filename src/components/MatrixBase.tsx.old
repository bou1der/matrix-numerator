import { z } from "zod"

const sizeEnum = z.enum([
  "sm",
  "md",
  "xl"
])

type size = z.infer<typeof sizeEnum>

const sizeStyles:{[key in size]: string} = {
  "sm":"size-[14px] xl:size-10",
  "md":"size-4 xl:size-11",
  "xl":"size-[18px] xl:size-14",
}

export function MatrixBase(){

  return (
    <div className=" bg-white w-80 h-80  xl:w-[1000] xl:h-[1000] size-1/2 relative">
      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[47.35%] left-[1.3%]" border="border-black"/>
      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[79.5%] left-[14.8%]" border="border-black"/>
      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[93%] left-[47.1%]" border="border-black"/>
      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[79.5%] left-[79.8%]" border="border-black"/>
      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[47.35%] left-[93.2%]" border="border-black"/>
      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[14.65%] left-[79.65%]" border="border-black"/>
      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[1.7%] left-[47.18%]" border="border-black"/>
      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[15%] left-[15%]" border="border-black"/>

      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[47.35%] left-[12.3%]" border="border-black"/>
      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[72%] left-[22.5%]" border="border-black"/>
      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[83%] left-[47.6%]" border="border-black"/>
      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[72.5%] left-[72.8%]" border="border-black"/>
      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[47.35%] left-[82.4%]" border="border-black"/>
      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[22.6%] left-[71.9%]" border="border-black"/>
      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[13.2%] left-[47.3%]" border="border-black"/>
      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[23%] left-[23%]" border="border-black"/>

      <CircleBase  size="sm" number={5} className="bg-yellow-700 text-black" position="top-[48%] left-[20%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[68.7%] left-[27.2%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[76%] left-[47.8%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[68.3%] left-[68.3%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[47.7%] left-[75.5%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[27.4%] left-[68.3%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[19.2%] left-[47.7%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[27.6%] left-[27.6%]" border="border-black"/>


      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[35%] left-[47.9%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[47.9%] left-[35%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[61.8%] left-[61.8%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[67.1%] left-[58.6%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[58.4%] left-[67.3%]" border="border-black"/>


      <CircleBase  size="xl" number={5} className="bg-white text-black" position="top-[47.5%] left-[47.5%]" border="border-black"/>
      <CircleBase  size="md" number={5} className="bg-white text-black" position="top-[47.9%] left-[53.4%]" border="border-black"/>
      <CircleBase  size="sm" number={5} className="bg-white text-black" position="top-[48.1%] left-[58.4%]" border="border-black"/>

      <img src="./matrix-base.png" className="w-full h-full absolute top-0 left-0"/>
    </div>
  )
}


function CircleBase({className, position, number, border, size}:
  {
    className?:string
    number: number | string
    position:string
    border:string
    size:size
  }){


  return (
    <div className={` ${position} ${border} absolute ${sizeStyles[size]}  border-[1.5px] xl:border-2  rounded-full flex justify-center z-10 items-center`} >
      <div className="relative w-full h-full p-[0.5px] xl:p-[1.2px]">
        <div className={`${className} w-full h-full rounded-full  font-semibold text-xs xl:text-2xl flex justify-center items-center`}>{number}</div>
      </div>
    </div>
  )
}


