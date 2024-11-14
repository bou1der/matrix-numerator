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
import { ThemeRequest } from "~/server/db/schema";
import { CallsSchema } from "~/lib/share/types/calls";
import { Textarea } from "./ui/textarea";

const omited = RequestsSchema.omit({type:true})

export function RequestForm({theme, children}:{
  theme:ThemeRequest,
  children:ReactNode
}){

  const [open, setOpen] = useState(false)
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(omited),
    defaultValues:{
      name:"",
      phone:"",
      email:"",
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
  
  const OnSubmit = (data: z.infer<typeof omited>) => {
    return createRequestMutation.mutate({
      ...data,
      type:theme
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
              <Button className="w-full rounded-xl" type="submit" disabled={createRequestMutation.isPending} >
                Отправить
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}




export function CallsForm({ children}:{
  children:ReactNode
}){

  const [open, setOpen] = useState(false)
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(CallsSchema),
    defaultValues:{
      name:"",
      phone:"",
      email:"",
      description:"",
    }
  })

  const createRequestMutation = api.requests.createCall.useMutation({
    onSuccess: () =>{
      form.reset()
      router.refresh()
      toast.success("Вопрос успешно отправлен")
      setOpen(false)
    },
    onError: (err) => {
      toast.error("Ошибка",{
        description:err.message
      })
    }
  })
  
  const OnSubmit = (data: z.infer<typeof CallsSchema>) => {
    return createRequestMutation.mutate({
      ...data,
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
              name="description"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea className="bg-white max-h-28 rounded-xl" {...field} />
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
              <Button className="w-full rounded-xl" type="submit" disabled={createRequestMutation.isPending} >
                Отправить
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
