import WelcomeBlock from "~/components/welcome_block";
import { PifagorMatrix } from "./matrix";
import { Collapsed } from "~/components/collapsible";
import { api } from "~/trpc/main/server";



export default async function PifagorPage(){
  const infos = await api.information.getAll({type:"PIFAGOR"})

  return(
    <>
      <WelcomeBlock noButton>
        <h1 className="text-secondary-foreground text-center max-w-[832px] ">
          Квадрат Пифагора
        </h1>
        <p className="text-secondary-foreground max-w-[832px] text-center">
          <b>Квадрат Пифагора </b> - это инструмент, который строит психоматрицу, отражающую ключевые черты характера и жизненные тенденции на основе вашей даты рождения. Матрица состоит из 9 ячеек, каждая из которых отвечает за определённый аспект личности: силу характера, уровень энергии, здоровье, логику, способности к наукам, трудовые качества, удачу, ответственность и ум. Дополнительно анализируются линии (вертикальные, горизонтальные и диагональные), которые показывают целеустремлённость, стабильность, духовность и темперамент. Чем больше цифр в ячейке, тем сильнее выражено качество; их отсутствие указывает на слабость.
        </p>
      </WelcomeBlock>
      <PifagorMatrix />
      <div className="w-full px-2 sm:px-6 py-2 flex flex-col gap-4">
        {
          infos.map((el) => (
            <Collapsed text={el.description} title={el.title}/>
          ))
        }
      </div>
    </>
  )
}
