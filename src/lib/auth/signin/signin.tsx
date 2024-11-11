'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { Form, FormControl, FormDescription, FormField, FormItem } from "~/components/ui/form"
import { OnError } from "~/lib/formError"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"

export default function SigninForm({}){

  const [loading, setLoading] = useState(false)
  const formSchema = z.object({
    email:z.string({
      required_error:"Email не введен",
      message:"Некоректный Email"
    }).email("Некоректный Email")
  })
  const form = useForm({
    resolver:zodResolver(formSchema),
    defaultValues:{
      email:""
    }
  })

  const router = useRouter()

  const onSubmit = async (data:z.infer<typeof formSchema>) =>{
    setLoading(true)
    try{
      const res = await signIn("email", {
        email:data.email,
        redirect:false,
      })

      if(res?.status !== 200){
        throw new Error(res?.error ?? "Не удалось отправить письмо")
      }

      const search = new URLSearchParams()
      search.set("compele", "true")

      router.push(`?${search.toString()}`)
    } catch (err){
      toast.error("Не удалось отправить письмо",{
        description:(err as Error).message
      })
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit,OnError)}
          className="space-y-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({field})=>(
            <FormItem>
                <FormDescription>
                  Введите ваш адрес электронной почты
                </FormDescription>
                <FormControl>
                  <Input {...field} placeholder="email"/>
                </FormControl>
            </FormItem>
            )}
          />

          <Button>Отправить письмо</Button>

        </form>
      </Form>

    </div>
  )
}
