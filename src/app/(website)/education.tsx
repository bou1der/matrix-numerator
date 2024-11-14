import { Button } from "~/components/ui/button";
import { ArrowDownRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Editor } from "~/components/editor";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { RequestForm } from "~/components/requests_form";
import { api } from "~/trpc/main/server";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { cn } from "~/lib/utils";



export async function EducationBlock(){
  const educations = await api.education.getAll()

  return (
    <div className="w-screen  overflow-hidden  bg-secondary ">
      <div className="container mx-auto space-y-16 py-20 px-2 sm:px-10">
        <h1 className="text-secondary-foreground text-center font-normal"><b className=" text-2xl sm:text-5xl italic"> Обучение </b> нумерологии ваш путь к знаниям</h1>
        <Carousel>
          <CarouselNext className="hover:bg-white/0" variant="ghost"><ChevronRight color="white" strokeWidth="4" className="size-6" /></CarouselNext>
          <CarouselPrevious className="hover:bg-white/0" variant="ghost"><ChevronLeft color="white" strokeWidth="4" className="size-6" /></CarouselPrevious>
          <CarouselContent>
            {
              educations.map((education) => (
                <CarouselItem className={cn(educations.length > 1 ? "sm:basis-1/2" : "")}>
                  <div className="size-full flex flex-col gap-4 bg-white rounded-xl p-6">
                    <h2 className="font-montserrat text-[20px] font-medium">{education.title}</h2>
                    <Editor disabled options={{limit:{length:800, expand:false}}} text={education.description} />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full z-10">Смотреть все<ArrowDownRight /></Button>
                      </DialogTrigger>
                       <DialogContent className={`max-w-7xl flex-col flex justify-start w-[96%] h-[95%]`}>
                         <DialogTitle className="hidden">""</DialogTitle>
                         <h2 className="text-2xl"><b>{education?.title}</b></h2>
                         <div className="size-full overflow-y-scroll no-scrollbar">
                           <Editor disabled text={education?.description || ""} />
                         </div>
                         <DialogFooter className="flex flex-col space-y-2 sm:flex-col justify-center items-center">
                           <p className="w-full text-left px-2 font-light">Стоимость курса: <b className="font-medium text-[16px]">{education?.price} ₽</b></p>
                           <RequestForm theme="EDUCATION">
                             <Button className="w-full h-10 rounded-2xl">Узнать об обучении</Button>
                           </RequestForm>
                         </DialogFooter>
                       </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
