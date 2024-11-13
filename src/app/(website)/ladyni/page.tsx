import WelcomeBlock from "~/components/welcome_block";
import LadyniMatrix from "./matrix";
import { Collapsed } from "~/components/collapsible";
import { api } from "~/trpc/main/server";


export default async function LadyniCalculate(){
  const infos = await api.information.getAll({type:"LADYNI"})

  return(
    <>
      <WelcomeBlock noButton >
        <h1 className="text-secondary-foreground text-center max-w-[832px] ">
          Матрица Ладини
        </h1>
        <p className="text-secondary-foreground max-w-[832px] text-center">
          <b>Матрица Ладини </b> — это уникальный нумерологический инструмент, который позволяет глубже понять личность, выявляя ее сильные и слабые стороны. На основе даты рождения Матрица Ладини строит энергетическую карту человека, раскрывая внутренние ресурсы, потенциалы и предрасположенности. Она помогает осознать, как гармонизировать жизненные сферы, избежать нежелательных повторений и раскрыть свой истинный путь.
        </p>
      </WelcomeBlock>
      <LadyniMatrix />
      <div className="w-full px-2 sm:px-6 py-2 flex flex-col gap-4">
        {
          infos.map((el) => (

            <Collapsed key={el.id} text={el.description} title={el.title}/>
          ))
        }
      </div>
    </>
  )
}
