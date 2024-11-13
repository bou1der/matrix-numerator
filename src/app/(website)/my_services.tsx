import { CardService } from "~/components/CardServices";
import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";
import { api } from "~/trpc/main/server";

export default async function MyServices(){
  const services = await api.services.getAll()
  return (
    <div className="w-screen min-h-screen py-16 px-2 sm:py-20 sm:px-10 bg-secondary flex gap-16 flex-col justify-around items-center sm:items-start overflow-hidden">
      <div className="w-full flex flex-col gap-8">
        <h1 className="text-secondary-foreground max-w-[620px] text-center sm:text-left">
          Мои услуги для вашего <b className="italic text-5xl"> духовного </b> роста
        </h1>
          <p className=" ml-auto text-primary-foreground text-center sm:text-right  max-w-[620px]">
            Мои консультации помогут вам лучше узнать себя и преодолеть трудности. Я предлагаю анализ личности, отношений, финансов и расчёты дат. Каждая услуга направлена на улучшение всех аспектов вашей жизни — от семьи до личностного роста. Узнайте себя глубже и найдите путь к гармонии и успеху.
          </p>
      </div>
        <Carousel className="w-full">
          <CarouselContent className="px-4 py-4">
          {
            services.map((el) =>(
              <CarouselItem key={el.id} className="flex justify-center md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                <CardService>
                  <b className="text-xl">
                    {el.title}
                  </b>
                  <p className="text-[16px] ">
                    {el.description}
                  </p>
                  <p className="text-[16px]">
                    Стоимость курса:<b> {el.price} руб.</b>
                  </p>
                </CardService>
              </CarouselItem>
            ))
          }
          </CarouselContent>
        </Carousel>
    </div>
  )
}
          // <div className="w-full flex flex-row items-center flex-wrap justify-center xl:justify-between gap-20">
