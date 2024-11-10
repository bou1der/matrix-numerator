import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni";
import { TableBody, Table, TableRow, TableCell } from "~/components/ui/table";
import { Separator } from "@radix-ui/react-separator";
import { cn } from "~/lib/utils";
import { IfAcumulate } from "~/lib/share/const";


const MainNumbers = [
  {
    text:"Диагональ Рода Отца",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.main.x2}-${data.main.x4}-${IfAcumulate(data.main.x2 + data.main.x4)}`
    }
  },
  {
    text:"Диагональ Рода Матери",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.main.x3}-${data.main.x1}-${IfAcumulate(data.main.x3 + data.main.x1)}`
    }
  },
  {
    text:"Проявленность духа",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.special.MM}-${data.special.x}-${IfAcumulate(data.special.MM + data.special.x)}`
    }
  },
  {
    text:"Проявленность материи",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?-?-?"

      return `${data.special.DD}-${data.special.YY}-${IfAcumulate(data.special.DD + data.special.YY)}`
    }
  },
  {
    text:"Родовая сила",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${data.main.x6}`
    }
  },
  {
    text:"Личная сила",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${data.main.x5}`
    }
  },
  {
    text:"Энергия души",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${IfAcumulate(data.main.x5 + data.main.x6)}`
    }
  },
  {
    text:"Целостность родовая",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${data.main.x6}`
    }
  },
  {
    text:"Целостность личная",
    getNumbers:  ( data:LadyniMatrixNumbers | undefined) => {
      if(!data) return "?"

      return `${data.main.x5}`
    }
  },
  {
    text:"Целостность человека",
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
    <Table className={cn(className, "sm:max-w-[640px] sm:min-w-[540px]")}>
      <TableBody className=" flex flex-col justify-center items-center">
        {
          MainNumbers.map((el) => (
            <TableRow key={el.text} className="   border w-full sm:w-4/5 grid grid-cols-2 place-content-center justify-items-center">
              <TableCell className="flex justify-start w-full ">
                {el.text}
              </TableCell>
              <TableCell >
                {el.getNumbers(numbers)}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}
