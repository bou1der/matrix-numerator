'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { DatePicker } from "./DatePicker";
import { Button } from "./ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem } from "./ui/form";
import { OnError } from "~/lib/formError";
import { format } from "date-fns";
import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni";
import { Acumulate } from "~/lib/share/const";



const schema = z.object({
  date: z.date()
})

export function MatrixLadyni() {
  const [numbers, setNumbers] = useState<LadyniMatrixNumbers | undefined>(undefined)

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues:{
      date: new Date(),
    }
  })

  const OnSubmit = (data: z.infer<typeof schema>) => {
    CalculateMoneyChannel(data, setNumbers)
    return
  }

  return (
  <div className="w-1/2 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(OnSubmit, OnError)}
          className="space-y-4"
        >
           <FormField
             control={form.control}
             name="date"
             render={({field}) =>(
               <FormItem>
                 <FormDescription>Дата рождения</FormDescription>
                 <FormControl>
                   <DatePicker
                     className="text-foreground w-full"
                     date={field.value}
                     setDate={field.onChange}
                   />
                 </FormControl>
               </FormItem>
             )}
           />
          <div>
          </div>
          <Button className="w-full bg-background text-foreground">Расчитать</Button>
        </form>
      </Form>
    </div>
  );
}


function CalculateMoneyChannel(data:z.infer<typeof schema>, setNumbers:Dispatch<SetStateAction<LadyniMatrixNumbers | undefined>> ){
  const date = format(data.date, "dd.MM.yyyy").split(".")

  const YY = Acumulate([Number(date[2]!)]);
  const MM = Number(date[1]!);
  const DD = Number(date[0]!) > 22 ?
    Acumulate([Number(date[0]!)])
    : Number(date[0]!)

  const x = Acumulate([DD, MM, YY])

  const x1 = Acumulate([x, DD])
  const x2 = Acumulate([MM, DD])
  const x3 = Acumulate([MM, YY])
  const x4 = Acumulate([x, YY])

  const x5 = Acumulate([DD, MM, YY, x])
  const x6 = Acumulate([x1, x2, x3, x4])

  const matrixNumbers: LadyniMatrixNumbers = {
    special:{
      YY,
      MM,
      DD,
      x
    },
    main:{
      x1,
      x2,
      x3,
      x4,
      x5,
      x6,
    }
  }

  setNumbers(matrixNumbers)
}
