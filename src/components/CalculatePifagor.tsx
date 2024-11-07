'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { DatePicker } from "./DatePicker";
import { Button } from "./ui/button";
import { toast } from "sonner";
import {format} from "date-fns"
import { Acumulate } from "~/lib/share/const";

export function MatrixPifagor() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [numbers, setNumbers] = useState<string[]>([])
  console.log(numbers)

  return (
  <div className="w-1/2 ">
    <div className="flex flex-col w-full pr-1 space-y-4 ">
      <DatePicker
        className="text-foreground"
        date={date}
        setDate={setDate}
      />
      <Button className="bg-background text-foreground hover:bg-primary"
        onClick={() => date ?
            CalculateMatrix(format(date || new Date(), "dd.MM.yyyy").split(".").join(""), setNumbers) 
            : toast.error("Введите дату рождения") }> Расчитать
        </Button>
    </div>
  </div>
  );
}

function CalculateMatrix(numbers:string, setNumbers:Dispatch<SetStateAction<string[]>> ){
  const arr = Array.from(numbers)

  const firstNum = Acumulate(arr)

  const secondNum = Acumulate(Array.from(String(firstNum)))

  const thirdNum = firstNum - (arr[0] === '0' ? Number(arr[1]) * 2 : Number(arr[0]) * 2)

  const fourNum = Acumulate(Array.from(String(thirdNum)))

  setNumbers([
    ...Array.from(String(firstNum)),
    ...Array.from(String(secondNum)),
    ...Array.from(String(thirdNum)),
    ...Array.from(String(fourNum)),
    ...arr
  ].filter((el) => el !== '0')
  .sort())
}
