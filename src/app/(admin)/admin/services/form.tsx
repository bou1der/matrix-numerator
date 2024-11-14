'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { DropdownMenuItem } from "~/components/ui/dropdown-menu";
import { Form, FormControl, FormDescription, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "~/components/ui/sheet";
import { Textarea } from "~/components/ui/textarea";
import { OnError } from "~/lib/client/on_error";
import { Service, serviceScheme } from "~/lib/share/types/services";
import { api } from "~/trpc/main/react";




export function ServiceCreateUpdate({service}:
  {
    service?:Service
  }){
  const [open,setOpen] = useState(false)

  const form = useForm({
    resolver:zodResolver(serviceScheme),
    defaultValues:service as z.infer<typeof serviceScheme>
  })
  const router = useRouter()

  const createServiceMutation = api.services.create.useMutation({
    onSuccess:() =>{
      toast.success("Услуга успешно созданна")
      setOpen(false)
      form.reset()
      router.refresh()
    },
    onError:(err) => {
      toast.error("Ошибка при создании услуги", {
        description:err.message
      })
    }
  })

  const updateServiceMutation = api.services.update.useMutation({
    onSuccess:() =>{
      toast.success("Услуга успешно обновленна")
      router.refresh()
    },
    onError:(err) => {
      toast.error("Ошибка при обновлении услуги", {
        description:err.message
      })
    }
  })

  const OnSubmit = (data: z.infer<typeof serviceScheme>) =>{
    if(service){
      return updateServiceMutation.mutate({...data, id:service.id})
    }

    createServiceMutation.mutate(data)
  }


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {
          service ? (
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
          {service ? "Редактировать" : "Создать"}
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
                    <Input className="bg-gray-200" {...field}/>
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
                    <Textarea className="bg-gray-200" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="price"
              control={form.control}
              render={({field}) =>(
                <FormItem>
                  <FormDescription>Цена</FormDescription>
                  <FormControl>
                    <Input className="bg-gray-200" type="number" value={field.value} onChange={(el) => field.onChange(Number(el.target.value))} min={0} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              disabled={
                updateServiceMutation.isPending || createServiceMutation.isPending
              }
            >Сохранить</Button>
          </form>
        </Form>

      </SheetContent>
    </Sheet>
  )
}
