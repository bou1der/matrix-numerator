import { Button } from "~/components/ui/button";
import { ArrowDownRight } from "lucide-react";
import { Editor } from "~/components/editor";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { RequestForm } from "~/components/requests_form";
import { api } from "~/trpc/main/server";



export async function EducationBlock(){
  const education = await api.education.getOne()

  return (
    <div className="w-screen  overflow-hidden space-y-16  bg-secondary py-20 px-2 sm:px-10">
      <h1 className="text-secondary-foreground text-center font-normal"><b className=" text-2xl sm:text-5xl italic"> Обучение </b> нумерологии ваш путь к знаниям</h1>
      <div className="rounded-3xl bg-white size-full p-6 space-y-4">
        <h2 className="text-2xl"><b>{education?.title}</b></h2>
        <Editor disabled options={{limit:{length:800, expand:false}}}  text={education?.description || ""}/>
        <Dialog>
          <DialogTrigger asChild className="size-full">
            {/* TODO Resolve window is not defined window.innerWidth < 460 ? : "Смотреть всю информацию"*/}
            <Button className="w-full">{ "Смотреть все"} <ArrowDownRight /> </Button>
          </DialogTrigger>
          <DialogContent className={`max-w-7xl flex-col flex justify-start w-[96%] h-[95%]`}>
            <DialogTitle className="hidden">""</DialogTitle>
            <h2 className="text-2xl"><b>{education?.title}</b></h2>
            <div className="size-full overflow-y-scroll no-scrollbar">
              <Editor disabled text={education?.description || ""} />
            </div>
            <DialogFooter className="flex flex-col space-y-2 sm:flex-col justify-center items-center">
              <p className="w-full text-left px-2">Стоимость курса: <b>{education?.price} руб.</b></p>
              <RequestForm theme="EDUCATION">
                <Button className="w-full h-10 rounded-2xl">Узнать об обучении</Button>
              </RequestForm>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
