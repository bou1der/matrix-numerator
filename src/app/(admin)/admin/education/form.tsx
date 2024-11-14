'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Editor } from "~/components/editor";
import { Button } from "~/components/ui/button";
import { DropdownMenuItem } from "~/components/ui/dropdown-menu";
import { Form, FormControl, FormDescription, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "~/components/ui/sheet";
import { OnError } from "~/lib/client/on_error";
import { Education, educationScheme } from "~/lib/share/types/education";
import { api } from "~/trpc/main/react";




export function EducationUpdateCreate({education}:
  {
    education?:Education
  }){

  const form = useForm({
    resolver:zodResolver(educationScheme),
    defaultValues:education as z.infer<typeof educationScheme>
    
  })
  const router = useRouter()

  const updateEducationMutation = api.education.update.useMutation({
    onSuccess:() =>{
      toast.success("Обучение успешно обновлено")
      router.refresh()
    },
    onError:(err) => {
      toast.error("Ошибка при обновлении обучения", {
        description:err.message
      })
    }
  })

  const createEducationMutation = api.education.create.useMutation({
    onSuccess:() =>{
      toast.success("Обучение успешно создано")
      router.refresh()
    },
    onError:(err) => {
      toast.error("Ошибка при создании обучении", {
        description:err.message
      })
    }
  })

  const OnSubmit = (data: z.infer<typeof educationScheme>) =>{
    if(education){
      return updateEducationMutation.mutate({...data, id:education.id})
    }

    return createEducationMutation.mutate(data)
  }


  return (
    <Sheet>
      <SheetTrigger asChild>
        {
          education ? (
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
          {education ? "Редактировать" : "Создать"}
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

            <Button disabled={updateEducationMutation.isPending || createEducationMutation.isPending}>Сохранить</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
