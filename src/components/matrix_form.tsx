'use client'

import Star from "public/star.svg"
import Image, { type StaticImageData } from "next/image";
import { Form, FormControl, FormDescription, FormField, FormItem } from "~/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Dates, monthKeys } from "~/lib/share/types/ladyni";
import { ReactNode, useMemo } from "react";
import { endYear, startYear } from "~/lib/share/const";
import { DateSchema, dateSchema } from "~/lib/share/types";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from "./ui/select";
import { cn } from "~/lib/utils";
import Combobox from "./ui/combobox";
import { OnError } from "~/lib/client/on_error";



const years =  [...Array(endYear - startYear + 1)]
 .map((_, index) => startYear + index)
 .map((date) => ({id:date.toString(), name:date.toString()}))
 .reverse()

const months = Object.keys(Dates).map((date) => ({
  id:date,
  name:Dates[date as monthKeys].month
}))

export default function MatrixForm({ OnSubmit, children}:
  {
    children:ReactNode,
    OnSubmit:(data:DateSchema) => void
  }){

  const form = useForm({
    resolver:zodResolver(dateSchema),
    defaultValues:{
      date:1,
      month:1,
      year: 2024
    }
  })


  const selectedDay = useMemo(
    () => months.find((m) => m.id === String(form.watch("date")))
      ,[form.watch("date")])
  const selectedMonth = useMemo(
    () => months.find((m) => m.id === String(form.watch("month")))
      ,[form.watch("month")])

  const selectedYear = useMemo(
    () => years.find((y) => y.id === String(form.watch("year")))
    , [form.watch("year")])

  const days = Array.from({length: Dates[selectedMonth?.id as monthKeys].days})
  .map((_,index) => index + 1)
  .map((day) => ({id:String(day), name:String(day)}))


  return(
      <div className="relative w-full h-full flex my-20 justify-center items-center">
        <div className="z-[1] flex flex-col w-full space-y-6 sm:px-8 container">
          <div className="w-full flex justify-start"> 
            <Image
              src={Star as StaticImageData}
              alt=""
              className="size-9"
            />
          </div>
          <h1 className="text-center">
            Дата рождения
          </h1>
          <p className="text-center">
            Заполни форму ниже, чтобы рассчитать матрицу
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(OnSubmit, OnError)}
              className="space-y-7"
            >
              <div className="space-y-7 sm:space-y-0 flex flex-col items-center justify-center gap-4 sm:flex-row ">
              <FormField 
                control={form.control}
                name="date"
                render={({field}) =>(
                  <FormItem className="w-full sm:max-w-24">
                    <FormDescription className="text-center text-primary">Число</FormDescription>
                    <FormControl>
                      <Combobox 
                        values={days}
                        value={selectedDay}
                        onChange={(v) => field.onChange(Number(v?.id))}
                        contentClassName="w-18"
                      >
                        <Button className="flex justify-between">{field.value} <ChevronDown /></Button>
                      </Combobox>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="month"
                render={({field}) =>(
                  <FormItem className="w-full sm:max-w-56">
                    <FormDescription className="text-center text-primary">Месяц</FormDescription>
                    <FormControl>

                      <Combobox
                        values={months}
                        value={selectedMonth} onChange={(v) => field.onChange(Number(v?.id))}
                        contentClassName="w-40" >

                        <Button className="flex justify-between">{Dates[String(field.value) as monthKeys].month} <ChevronDown /></Button>
                      </Combobox>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField 
                control={form.control}
                name="year"
                render={({field}) =>(
                  <FormItem className="w-full sm:max-w-28">
                    <FormDescription className="text-center text-primary">Год</FormDescription>
                    <FormControl>
                      <Combobox 
                        values={years}
                        value={selectedYear}
                        onChange={(v) => field.onChange(Number(v?.id))}
                        className="sm:max-w-32"
                      >
                        <Button className="flex justify-between">{field.value} <ChevronDown /></Button>
                      </Combobox>
                    </FormControl>
                  </FormItem>
                )}
              />
              </div>

              <div className="w-full flex justify-center">
                <Button className=" w-full max-w-[465px]">
                  Расчитать
                </Button>
              </div>

            </form>
          </Form>
          <div className="w-full flex justify-end"> 
            <Image
              src={Star as StaticImageData}
              alt=""
              className="size-9"
            />
          </div>
        </div>
        <div className="blur-sm absolute">
          { children }
        </div>
      </div>
  )
}


function SelectControl({ className, placeholder, children }:
  {
    placeholder:string,
    children:ReactNode,
    className?:string
  }){


  return (
    <Select>
      <SelectTrigger className="bg-white/0 border-primary rounded-md">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent popover="auto" className={cn(className, "bg-background border-primary border-[3px] min-w-4")}>
        <SelectGroup className="w-full">
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  )

}
