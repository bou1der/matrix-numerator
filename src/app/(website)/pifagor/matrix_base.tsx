import { number } from "zod"
import { PifagorNumbers } from "~/lib/share/types/pifagor"



const check = (arg:number[] | undefined) =>{
  if(arg === undefined) return "?"
  if(arg.length === 0) return "Пусто"
  return arg.join("")
}

const checkSide = (arg:number | undefined) =>{
  if(arg === undefined) return "?"
  if(arg === 0) return "Пусто"
  return arg
}


const cells = [
  {
    title:"Темперамент",
    value:(numbers:PifagorNumbers | undefined) =>{
      return checkSide(numbers?.all.filter((v) => v === 3 || v === 5 || v === 7).length) 
    }
  },
  {
    title:"Характер",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 1)) 
    }
  },
  {
    title:"Здоровье",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 4)) 
    }
  },
  {
    title:"Удача",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 7)) 
    }
  },
  {
    title:"Цель",
    value:(numbers:PifagorNumbers | undefined) =>{
      return checkSide(numbers?.all.filter((v) => v === 1 || v === 4 || v === 7).length) 
    }
  },
  {
    title:"Энергия",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 2)) 
    }
  },
  {
    title:"Логика",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 5)) 
    }
  },
  {
    title:"Долг",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 8)) 
    }
  },
  {
    title:"Семья",
    value:(numbers:PifagorNumbers | undefined) =>{
      return checkSide(numbers?.all.filter((v) => v === 2 || v === 5 || v === 8).length) 
    }
  },
  {
    title:"Интерес",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 3)) 
    }
  },
  {
    title:"Труд",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 6)) 
    }
  },
  {
    title:"Память",
    value:(numbers:PifagorNumbers | undefined) =>{
      return check(numbers?.all.filter((v) => v === 9)) 
    }
  },
  {
    title:"Привычки",
    value:(numbers:PifagorNumbers | undefined) =>{
      console.log(numbers?.all.filter((v) => v === 3 || v === 6 || v === 9))

      return checkSide(numbers?.all.filter((v) => v === 3 || v === 6 || v === 9).length) 
    }
  },
  {
    title:"Самооценка",
    value:(numbers:PifagorNumbers | undefined) =>{
      return checkSide(numbers?.all.filter((v) => v === 1 || v === 2 || v === 3).length) 
    }
  },
  {
    title:"Быт",
    value:(numbers:PifagorNumbers | undefined) =>{
      return checkSide(numbers?.all.filter((v) => v === 4 || v === 5 || v === 6).length) 
    }
  },
  {
    title:"Талант",
    value:(numbers:PifagorNumbers | undefined) =>{
      return checkSide(numbers?.all.filter((v) => v === 7 || v === 8 || v === 9).length) 
    }
  },
  {
    title:"Духовность",
    value:(numbers:PifagorNumbers | undefined) =>{
      return checkSide(numbers?.all.filter((v) => v === 1 || v === 5 || v === 9).length) 
    }
  },
]

export function PifagorBase({numbers}:{
  numbers?:PifagorNumbers 
}){

  return (
    <div className="grid grid-cols-4 grid-rows-5 bg-matrix border-primary border-2 rounded-lg">
      <div className="col-span-3 border-2 border-primary flex flex-col justify-evenly px-6">
        <p>Ваша дата рождения: {numbers ? `${numbers.birhday[0]} - ${numbers.birhday[1]} - ${numbers.birhday[2]}` : "?? - ?? - ????"}</p>
        <p>Доп. числа:   {numbers ? `${numbers.extra.join(", ")}` : "?, ?, ?, ?"}</p>
        <p>Число судьбы:   {numbers ? `${numbers.fate}` : "?"}</p>
      </div>
      {
        cells.map((cell) =>(
          <div className="size-44 border-2 border-primary gap-4 flex flex-col justify-center items-center">
            <p>{cell.title}</p>
            <p>{cell.value(numbers)}</p>
          </div>
        ))
      }
    </div>
  )
}
