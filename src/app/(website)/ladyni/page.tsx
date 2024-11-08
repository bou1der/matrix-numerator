import WelcomeBlock from "~/components/welcome_block";
import LadyniMatrix from "./matrix";

export default function LadyniCalculate(){
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
    </>
  )
}
