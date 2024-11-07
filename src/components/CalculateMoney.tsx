'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { OnError } from "~/lib/formError";
import { RuEnum, SymbolWeight} from "~/lib/share/types/NameWeight";
import { Acumulate } from "~/lib/share/const";



const schema = z.object({
  name: z.string()
    .min(2, "Имя слишком короткое")
    .regex(/^[А-Яа-яЁё\s]+$/, "Имя должно быть на русском языке"),
  // date: z.date()
})

export function MoneyChannel() {
  const [numbers, setNumbers] = useState<number>()

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues:{
      name: "",
      // date: new Date(),
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
            name="name"
            render={({field}) =>(
              <FormItem>
                <FormDescription>Ваше имя</FormDescription>
                <FormControl>
                  <Input placeholder="Никита" className="w-full text-foreground bg-background"  {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          {
           // <FormField
           //   control={form.control}
           //   name="date"
           //   render={({field}) =>(
           //     <FormItem>
           //       <FormDescription>Дата рождения</FormDescription>
           //       <FormControl>
           //         <DatePicker
           //           className="text-foreground w-full"
           //           date={field.value}
           //           setDate={field.onChange}
           //         />
           //       </FormControl>
           //     </FormItem>
           //   )}
           // />
          }
          <div>
          </div>
          <Button className="w-full bg-background text-foreground">Расчитать</Button>
        </form>
      </Form>
    </div>
  );
}


function CalculateMoneyChannel(data:z.infer<typeof schema>, setNumbers:Dispatch<SetStateAction<number | undefined>> ){
  const name:RuEnum[] = data.name.toUpperCase().split("") as RuEnum[]
  const nameWeight = name.map((symb) => SymbolWeight[symb])
  const number = Acumulate(nameWeight, { oneNum:true })

  console.log(number)

  setNumbers(number)
}

