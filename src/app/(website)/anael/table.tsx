import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import { AnaelNumbers, IfAcumMinus } from "~/lib/share/types/anael"
import { cn } from "~/lib/utils"

const cells = [
  {
    title: (numbers: AnaelNumbers | undefined) =>{
      return `А. Аркан дня( ${numbers ? numbers.DD : "?"} )`
    },
    ach: (numbers: AnaelNumbers | undefined) =>{
      return `Д. ЧД1( ${numbers ? IfAcumMinus(numbers.DD + numbers.MM) : "?"} )`
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `И. КУ1( ${numbers ? numbers.main.x5 : "?"} )`
    }
  },
  {
    title: (numbers: AnaelNumbers | undefined) =>{
      return `Б. Аркан месяца( ${numbers ? numbers.MM : "?"} )`
    },
    ach: (numbers: AnaelNumbers | undefined) =>{
      return `E. ЧД2( ${numbers ? IfAcumMinus(numbers.DD + numbers.YY) : "?"} )`
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `К. КУ2( ${numbers ? numbers.main.x6 : "?"} )`
    }
  },
  {
    title: (numbers: AnaelNumbers | undefined) =>{
      return `В. Аркан года( ${numbers ? numbers.YY : "?"} )`
    },
    ach: (numbers: AnaelNumbers | undefined) =>{
      return `Ж. ЧД3( ${numbers ? IfAcumMinus(IfAcumMinus(numbers.DD + numbers.MM) + IfAcumMinus(numbers.DD + numbers.YY)) : "?"} )`
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `Л. КУ3( ${numbers ? numbers.main.x7 : "?"} )`
    }
  },
  {
    title: (numbers: AnaelNumbers | undefined) =>{
      return `Г. Самореализация( ${numbers ? numbers.x : "?"} )`
    },
    ach: (numbers: AnaelNumbers | undefined) =>{
      return `З. ЧД4( ${numbers ? IfAcumMinus(numbers.YY + numbers.MM) : "?"} )`
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `М. КУ4( ${numbers ? numbers.main.x8 : "?"} )`
    }
  },
  {
    title: (numbers: AnaelNumbers | undefined) =>{
      return ``
    },
    ach: () =>{
      return ``
    },
    node: (numbers: AnaelNumbers | undefined) =>{
      return `М. КУ5( ${numbers ? numbers.main.x9 : "?"} )`
    }
  },

]
export function PeopleNumberTable({numbers, className}:
  {
    numbers?:AnaelNumbers
    className?:string
  }){

  return(
    <Table className={cn(className, "border rounded-md w-full sm:min-w-[600px]")}>
      <TableHeader>
        <TableRow>
          <TableHead className="border-none w-1/3 border-x-2 font-semibold text-left  text-primary text-[6px] sm:text-[14px]">Путь</TableHead>
          <TableHead className="w-1/3 border-x-2 font-semibold text-left  text-primary text-[6px] sm:text-[14px]">Число достижений (ЧД)</TableHead>
          <TableHead className="border-none w-1/3 border-x-2 font-semibold text-left text-primary text-[6px] sm:text-[14px]">Кармический узел (КУ)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="" >
        {
          cells.map((el) => (
            <TableRow key={el.title(numbers)} className="w-full">
              <TableCell className="text-left text-[6px] sm:text-[14px]">
                {el.title(numbers)}
              </TableCell>
              <TableCell className=" border-x text-left text-[6px] sm:text-[14px]" >
                {el.ach(numbers)}
              </TableCell>
              <TableCell className="text-left text-[6px] sm:text-[14px]">
                {el.node(numbers)}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}
