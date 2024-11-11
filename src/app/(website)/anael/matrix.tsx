'use client'
import Image,{type StaticImageData} from "next/image";
import AnaelMatrixSvg from "public/matrixs/anael.svg"
import MatrixForm from "~/components/matrix_form";
import { type DateSchema } from "~/lib/share/types";



export function AnaelMatrix(){

  const OnSubmit = (data:DateSchema) =>{
    return
  };

  return(
      <div className="w-screen min-h-screen overflow-hidden gap-12 flex flex-col justify-center items-center py-20 px-10">
        <MatrixForm  OnSubmit={OnSubmit} >
          <Image src={AnaelMatrixSvg as StaticImageData} alt="" className="h-full"/>
        </MatrixForm>
      </div>
  )
}
