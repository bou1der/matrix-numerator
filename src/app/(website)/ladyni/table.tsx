import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni";
import { TableBody, Table, TableRow, TableCell } from "~/components/ui/table";
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
    <Table className={cn(className)}>
      <TableBody className=" flex flex-col justify-center items-center border-2 rounded-md">
        {
          MainNumbers.map((el) => (
            <TableRow key={el.text} className="w-full grid grid-cols-2 place-content-center justify-items-center">
              <TableCell className="w-full ">
                <p className="text-sm ">{el.text}</p>
              </TableCell>
              <TableCell className="w-full border-l-2 flex items-center">
                <p className="text-sm">
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
