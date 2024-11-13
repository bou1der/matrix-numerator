'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Editor } from "~/components/editor";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { OnError } from "~/lib/client/on_error";
import { Education, educationScheme } from "~/lib/share/types/education";
import { api } from "~/trpc/main/react";




export function EducationUpdate({education}:
  {
    education?:Education
  }){

  const form = useForm({
    resolver:zodResolver(educationScheme),
    defaultValues:{
      title:education?.title || "",
      description:education?.description || "",
      price:education?.price || 0
    }
  })
  const router = useRouter()

  const updateEducationMutation = api.education.updateSelf.useMutation({
    onSuccess:() =>{
      toast.success("Блок успешно обновленн")
      router.refresh()
    },
    onError:(err) => {
      toast.error("Ошибка при обновлении блока", {
        description:err.message
      })
    }
  })

  const OnSubmit = (data: z.infer<typeof educationScheme>) =>{
    updateEducationMutation.mutate(data)
  }


  return (
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
            <FormItem className="min-h-44 ">
              <FormDescription>Описание</FormDescription>
              <FormControl className="max-h-96">
                <Editor className="h-full min-h-44  border-primary rounded-lg  border-2" text={education?.description ? education.description : ""} onChange={field.onChange} />
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

        <Button disabled={updateEducationMutation.isPending}>Сохранить</Button>
      </form>
    </Form>
  )
}
