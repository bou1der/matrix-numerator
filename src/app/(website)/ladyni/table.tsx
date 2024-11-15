import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni";
import { TableBody, Table, TableRow, TableCell } from "~/components/ui/table";
import { cn } from "~/lib/utils";
import { IfAcumulate } from "~/lib/share/const";


const MainNumbers = [
  {
    text:"Диагональ Рода Отца",
    style:"text-purple-600",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.main.x2}-${data.main.x4}-${IfAcumulate(data.main.x2 + data.main.x4)}`
    }
  },
  {
    text:"Диагональ Рода Матери",
    style:"text-blue-600",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.main.x3}-${data.main.x1}-${IfAcumulate(data.main.x3 + data.main.x1)}`
    }
  },
  {
    text:"Проявленность духа",
    style:"text-[#70548E]",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.special.MM}-${data.special.x}-${IfAcumulate(data.special.MM + data.special.x)}`
    }
  },
  {
    text:"Проявленность материи",
    style:"text-indigo-600",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.special.DD}-${data.special.YY}-${IfAcumulate(data.special.DD + data.special.YY)}`
    }
  },
  {
    text:"Родовая сила",
    style:"text-sky-400",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${data.main.x6}`
    }
  },
  {
    text:"Личная сила",
    style:"text-teal-400",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${data.main.x5}`
    }
  },
  {
    text:"Энергия души",
    style:"text-blue-800",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${IfAcumulate(data.main.x5 + data.main.x6)}`
    }
  },
  {
    text:"Целостность родовая",
    style:"text-rose-500",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${data.main.x6}`
    }
  },
  {
    text:"Целостность личная",
    style:"text-amber-700",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${data.main.x5}`
    }
  },
  {
    text:"Целостность человека",
    style:"text-black",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.main.x6}-${data.main.x5}-${IfAcumulate(data.main.x5 + data.main.x6)}`
    }
  },
]

export function PeopleNumberTable({numbers, className}:
  {
    numbers?:LadyniMatrixNumbers
    className?:string
  }){

  return(
    <Table className={cn(className)}>
      <TableBody className=" flex flex-col justify-center items-center border-2 rounded-md">
        {
          MainNumbers.map((el) => (
            <TableRow key={el.text} className="w-full grid grid-cols-2 place-content-center justify-items-center">
              <TableCell className="w-full ">
                <p className={cn(el.style, "text-sm")}>{el.text}</p>
              </TableCell>
              <TableCell className="w-full border-l-2 flex items-center">
                <p className="text-sm    ">
                  {el.getNumbers(numbers)}
                </p>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}
