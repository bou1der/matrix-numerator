import { CardService } from "~/components/CardServices";
import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";



const services = [
  {
    text:"Матрица вашего ребенка",
    description:"Позволяет понять сильные и слабые стороны вашего ребенка с раннего возраста, помогая направить его на правильный путь.",
    price:3000,
  },
  {
    text:"Общая консультация по Матрице",
    description:"Узнайте глубже о своей личности, сильных и слабых сторонах, чтобы раскрыть потенциал и построить лучшую версию себя.",
    price:6000,
  },
  {
    text:"Родители и дети",
    description:"Понимание особенностей вашего ребенка для выстраивания гармоничных отношений и правильного выбора его пути.",
    price:8000,
  },
  {
    text:"Финансовый термостат",
    description:"Анализ уровней финансовой энергии, определение блокировок и путей для их преодоления.",
    price:5000,
  }
]

export default function MyServices(){
  return (
    <div className="w-screen min-h-screen py-16 px-2 sm:py-20 sm:px-10 bg-secondary flex gap-16 flex-col justify-around items-center sm:items-start overflow-hidden">
      <div className="w-full flex flex-col gap-8">
        <h1 className="text-secondary-foreground max-w-[620px] text-center sm:text-left">
          Мои услуги для вашего <b className="italic"> духовного </b> роста
        </h1>
          <p className=" ml-auto text-primary-foreground text-center sm:text-right  max-w-[620px]">
            Мои консультации помогут вам лучше узнать себя и преодолеть трудности. Я предлагаю анализ личности, отношений, финансов и расчёты дат. Каждая услуга направлена на улучшение всех аспектов вашей жизни — от семьи до личностного роста. Узнайте себя глубже и найдите путь к гармонии и успеху.
          </p>
      </div>
        <Carousel className="w-full">
          <CarouselContent className="px-4 py-4">
          {
            services.map((el) =>(
              <CarouselItem key={el.text} className="flex justify-center md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                <CardService>
                  <b className="text-20">
                    {el.text}
                  </b>
                  <p className="text-[16px] ">
                    {el.description}
                  </p>
                  <p className="text-[16px]">
                    Стоимость курса:<b> {el.price}</b>
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
