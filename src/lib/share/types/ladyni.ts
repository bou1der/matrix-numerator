import { z } from "zod"


export type LadyniMatrixNumbers = {
  origin:{
    day:number,
    month:number,
    year:number
  }
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
    x6:number,
    x7:number,
    x8:number,
    x9:number,
    x10:number,
    x11:number,
    x12:number,
    x13:number,
    x14:number,
    x15:number,
    x16:number,
    x17:number,
    x18:number,
    x19:number,
    x20:number,
    x21:number,
    x22:number,
    x23:number,
  },
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
