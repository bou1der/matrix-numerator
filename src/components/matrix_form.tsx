'use client'

import Star from "../../public/star.svg"
import LadyniMatrixSvg from "../../public/matrix_ladyni.svg"
import Image from "next/image";
import { Form, FormControl, FormDescription, FormField, FormItem } from "~/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnError } from "~/lib/formError";
import { useForm } from "react-hook-form";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "~/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Dates, monthKeys } from "~/lib/share/types/ladyni";
import { ReactNode, useMemo } from "react";
import { endYear, startYear } from "~/lib/share/const";
import { DateSchema, dateSchema } from "~/lib/share/types";


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

  const currentMonth = useMemo(
    () => String(form.watch("month"))
      ,[form.watch("month")])

  return(
      <div className="relative w-full h-full flex my-20 justify-center items-center">
        <div className="z-[1] flex flex-col w-full space-y-6 sm:px-8 sm:max-w-[50%]">
          <div className="w-full flex justify-start"> 
            <Image
              src={Star}
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
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="hover:bg-primary/10 w-full h-11 border border-primary rounded-xl">
                            {field.value}
                            <ChevronDown/>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col bg-primary  gap-1 px-2 rounded-sm py-2 max-h-48 overflow-scroll">
                          {
                            Array.from({length:Dates[currentMonth as monthKeys].days}).map((_, index) => (
                              <DropdownMenuItem key={index * 2} asChild onSelect={() => field.onChange(Number(index + 1))} >
                                <Button>
                                  {index + 1}
                                </Button>
                              </DropdownMenuItem>
                            ))
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="hover:bg-primary/10 w-full h-11 border border-primary rounded-xl">
                            {Dates[currentMonth as monthKeys].month}
                            <ChevronDown/>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col bg-primary gap-1 rounded-sm py-2 px-2 max-h-48 overflow-scroll">
                          {
                            Object.keys(Dates).map((date) => (
                              <DropdownMenuItem key={date} asChild onSelect={() => field.onChange(Number(date))} >
                                <Button>
                                  { Dates[date as monthKeys].month }
                                </Button>
                              </DropdownMenuItem>
                            ))
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="hover:bg-primary/10 w-full h-11 border border-primary rounded-xl">
                            {field.value}
                            <ChevronDown/>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col bg-primary gap-1 rounded-sm py-2 px-2 max-h-48 overflow-scroll">
                          {
                            [...Array(endYear - startYear + 1)]
                              .map((_, index) => startYear + index)
                              .map((date) => (
                                <DropdownMenuItem key={date} asChild onSelect={() => field.onChange(date)} >
                                  <Button className="outline-none">
                                    {date}
                                  </Button>
                                </DropdownMenuItem>
                            ))
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
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
              src={Star}
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
