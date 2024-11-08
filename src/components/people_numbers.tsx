import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni";
import { TableBody, Table, TableRow, TableCell } from "./ui/table";
import { Separator } from "@radix-ui/react-separator";
import { cn } from "~/lib/utils";


const MainNumbers = [
  {
    text:"Диагональ Рода Отца",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7-7-7"
    }
  },
  {
    text:"Диагональ Рода Матери",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7-7-7"
    }
  },
  {
    text:"Проявленность духа",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7-7-7"
    }
  },
  {
    text:"Проявленность материи",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7-7-7"
    }
  },
  {
    text:"Родовая сила",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7"
    }
  },
  {
    text:"Личная сила",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7"
    }
  },
  {
    text:"Энергия души",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7"
    }
  },
  {
    text:"Целостность родовая",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7"
    }
  },
  {
    text:"Целостность личная",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7"
    }
  },
  {
    text:"Целостность человека",
    getNumbers:  ( data:LadyniMatrixNumbers) => {
      return "7-7-7"
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
            <TableRow key={el.text} className=" w-full sm:w-4/5 grid grid-cols-2 place-content-center justify-items-center">
              <TableCell className="flex justify-start w-full ">
                {el.text}
              </TableCell>
              <TableCell >
                { numbers ? el.getNumbers(numbers) : "7-7-7"}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}
