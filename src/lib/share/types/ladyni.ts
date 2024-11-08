import { z } from "zod"


export type LadyniMatrixNumbers = {
  special:{
    YY:number,
    MM:number,
    DD:number,
    x:number
  },
  main:{
    x1:number,
    x2:number,
    x3:number,
    x4:number,
    x5:number,
    x6:number
  }
}

export type monthKeys = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"

export const monthEnum = z.enum([
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
])

export type MonthEnum = z.infer<typeof monthEnum>

export type MatrixForm = {
  [key in monthKeys]:{
    days:number,
    month:MonthEnum
  }
}
export const Dates: MatrixForm = {
  "1":{
    days:31,
    month:"Январь"
  },
  "2":{
    days:29,
    month:"Февраль"
  },
  "3":{
    days:31,
    month:"Март"
  },
  "4":{
    days:30,
    month:"Апрель"
  },
  "5":{
    days:31,
    month:"Май"
  },
  "6":{
    days:30,
    month:"Июнь"
  },
  "7":{
    days:31,
    month:"Июль"
  },
  "8":{
    days:31,
    month:"Август"
  },
  "9":{
    days:30,
    month:"Сентябрь"
  },
  "10":{
    days:31,
    month:"Октябрь"
  },
  "11":{
    days:30,
    month:"Ноябрь"
  },
  "12":{
    days:31,
    month:"Декабрь"
  }
}
