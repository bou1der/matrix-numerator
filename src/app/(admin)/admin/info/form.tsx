'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Editor } from "~/components/editor";
import { Button } from "~/components/ui/button";
import Combobox from "~/components/ui/combobox";
import { DropdownMenuItem } from "~/components/ui/dropdown-menu";
import { Form, FormControl, FormDescription, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "~/components/ui/sheet";
import { OnError } from "~/lib/client/on_error";
import { Information, InformationNames, InformationSchema } from "~/lib/share/types/informations";
import { serviceScheme } from "~/lib/share/types/services";
import { InfoType } from "~/server/db/schema";
import { api } from "~/trpc/main/react";




export function InformationCreateUpdate({information}:
  {
    information?:Information
  }){
  const [open,setOpen] = useState(false)

  const form = useForm({
    resolver:zodResolver(InformationSchema),
    defaultValues:information as z.infer<typeof InformationSchema>
  })
  const router = useRouter()

  const selectedMatrix = useMemo(
    () => ({id:form.watch("type"),name:InformationNames[form.watch('type')]})
    , [form.watch("type")])

  const createInformationMutation = api.information.create.useMutation({
    onSuccess:() =>{
      toast.success("Расшифровка успешно созданна")
      setOpen(false)
      form.reset()
      router.refresh()
    },
    onError:(err) => {
      toast.error("Ошибка при создании расшифровки", {
        description:err.message
      })
    }
  })

  const updateInformationMutation = api.information.update.useMutation({
    onSuccess:() =>{
      toast.success("Расшифровка успешно обновленна")
      router.refresh()
    },
    onError:(err) => {
      toast.error("Ошибка при обновлении расшифровки", {
        description:err.message
      })
    }
  })

  const OnSubmit = (data: z.infer<typeof InformationSchema>) =>{
    if(information){
      return updateInformationMutation.mutate({...data, id:information.id})
    }
    createInformationMutation.mutate(data)
  }


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {
          information ? (
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Редактировать
            </DropdownMenuItem>
          ) : (
            <Button>Создать</Button>
          )
        }
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          {information ? "Редактировать" : "Создать"}
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(OnSubmit,OnError)}
            className="space-y-6"
          >
            <FormField
              name="title"
              control={form.control}
              render={({field}) =>(
                <FormItem>
                  <FormDescription>Заголовок</FormDescription>
                  <FormControl>
                    <Input className="bg-white border-primary" {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="description"
              control={form.control}
              render={({field}) =>(
                <FormItem>
                  <FormDescription>Описание</FormDescription>
                  <FormControl className="max-h-96">
                    <Editor className="border-primary border-2 rounded-xl" text={field.value} onChange={field.onChange}/>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="type"
              control={form.control}
              render={({field}) =>(
                <FormItem>
                  <FormDescription>Для матрицы</FormDescription>
                  <FormControl>
                    <Combobox
                      values={Object.keys(InformationNames).map((key) =>({
                        id:key,
                        name:InformationNames[key as InfoType]
                      }))}
                      value={selectedMatrix}
                      onChange={(v) => field.onChange(v?.id)}
                      contentClassName="w-40"
                    >
                      <Button>{InformationNames[field.value]}<ChevronDown /></Button>
                    </Combobox>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              disabled={
                updateInformationMutation.isPending || createInformationMutation.isPending
              }
            >Сохранить</Button>
          </form>
        </Form>

      </SheetContent>
    </Sheet>
  )
}
