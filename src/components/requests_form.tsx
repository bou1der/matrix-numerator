'use client'
import { ReactNode, useState } from "react";
import { DialogTrigger, Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RequestsSchema } from "~/lib/share/types/requests";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { api } from "~/trpc/main/react";
import { OnError } from "~/lib/client/on_error";


export function RequestForm({children}:{
  children:ReactNode
}){

  const [open, setOpen] = useState(false)
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(RequestsSchema),
    defaultValues:{
      name:"",
      phone:"",
      email:""
    }
  })

  const createRequestMutation = api.requests.create.useMutation({
    onSuccess: () =>{
      form.reset()
      router.refresh()
      toast.success("Заявка успешно отправленна")
      setOpen(false)
    },
    onError: (err) => {
      toast.error("Ошибка",{
        description:err.message
      })
    }
  })
  
  const OnSubmit = (data: z.infer<typeof RequestsSchema>) => {
    return createRequestMutation.mutate({
      ...data
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="rounded-3xl">
        <DialogHeader className="w-full">
          <DialogTitle className="w-full text-center text-2xl">
            Оставить заявку
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(OnSubmit, OnError)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input className="bg-white h-11 rounded-xl" placeholder="Имя" {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input className="bg-white h-11 rounded-xl" placeholder="Телефон" {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input className="bg-white h-11 rounded-xl" placeholder="Почта" {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter className="w-full">
              <Button className="w-full rounded-xl" type="submit" >
                Отправить
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
