'use client'
import {motion} from "framer-motion"
import Image from "next/image"
import StarCard from "../../public/star_card.svg"
import { ReactNode } from "react"



const first = {
  rest:{
    rotate: 3,
    transition:{
      duration: 0.5,
      ease:"easeInOut"
    }
  },
  hover: {
    rotate: -3,
    transition:{
      duration: 0.5,
      ease:"easeInOut"
    }
  }
}

const second = {
  rest:{
    rotate: 6,
    transition:{
      duration: 0.5,
      ease:"easeInOut"
    }
  },
  hover: {
    rotate: -6,
    transition:{
      duration: 0.5,
      ease:"easeInOut"
    }
  }
}
export function CardService({ children}:
  {
    children:ReactNode
  }){
  return(
      <motion.div
        className=" h-[360px] w-[300px] md:h-[380px] md:w-[320px] 2xl:h-[420px] 2xl:w-[380px] bg-white rounded-3xl relative"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="absolute top-0 w-full h-full p-6 flex flex-col justify-between items-center z-[3]">
          <div className="w-full flex justify-start items-start">
            <Image
              src={StarCard}
              alt=""
              className="z-[5]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            {children}
          </div>
        </div>
        <motion.div
          className="absolute top-0 rounded-3xl bg-white/50 w-full h-full z-[2]"
          variants={first}
        />

        <motion.div
          className="absolute top-0 rounded-3xl bg-white/50 w-full h-full z-[1]"
          variants={second}
        />

      </motion.div>
  )
}
