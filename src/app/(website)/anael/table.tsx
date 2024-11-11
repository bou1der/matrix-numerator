import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import { AnaelNumbers, IfAcumMinus } from "~/lib/share/types/anael"
import { cn } from "~/lib/utils"

const cells = [
  {
    title:"А. Аркан дня",
    ach: (numbers: AnaelNumbers | undefined) =>{
      return `Д. ЧД1( ${numbers ? IfAcumMinus(numbers.DD + numbers.MM) : "?"} )`
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `И. КУ1( ${numbers ? numbers.main.x5 : "?"} )`
    }
  },
  {
    title:"Б. Аркан для",
    ach: (numbers: AnaelNumbers | undefined) =>{
      return `E. ЧД2( ${numbers ? IfAcumMinus(numbers.DD + numbers.YY) : "?"} )`
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `К. КУ2( ${numbers ? numbers.main.x6 : "?"} )`
    }
  },
  {
    title:"В. Аркан для",
    ach: (numbers: AnaelNumbers | undefined) =>{
      return `Ж. ЧД3( ${numbers ? IfAcumMinus(IfAcumMinus(numbers.DD + numbers.MM) + IfAcumMinus(numbers.DD + numbers.YY)) : "?"} )`
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `Л. КУ3( ${numbers ? numbers.main.x7 : "?"} )`
    }
  },
  {
    title:"Г. Аркан для",
    ach: (numbers: AnaelNumbers | undefined) =>{
      return `З. ЧД4( ${numbers ? IfAcumMinus(numbers.YY + numbers.MM) : "?"} )`
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `М. КУ4( ${numbers ? numbers.main.x8 : "?"} )`
    }
  },

]
export function PeopleNumberTable({numbers, className}:
  {
    numbers?:AnaelNumbers
    className?:string
  }){

  return(
    <Table className={cn(className, "border-2 w-full sm:min-w-[600px]")}>
      <TableHeader >
        <TableRow>
          <TableHead className="border-x-2 font-semibold text-center  text-primary text-[6px] sm:text-[14px]">Путь</TableHead>
          <TableHead className="border-x-2 font-semibold text-center  text-primary text-[6px] sm:text-[14px]">Число достижений (ЧД)</TableHead>
          <TableHead className="border-x-2 font-semibold text-center text-primary text-[6px] sm:text-[14px]">Кармический узел (КУ)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-2" >
        {
          cells.map((el) => (
            <TableRow key={el.title} className="w-full">
              <TableCell className="text-center text-[6px] sm:text-[14px]">
                {el.title}
              </TableCell>
              <TableCell className=" text-center text-[6px] sm:text-[14px]" >
                {el.ach(numbers)}
              </TableCell>
              <TableCell className="text-center text-[6px] sm:text-[14px]">
                {el.node(numbers)}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}
