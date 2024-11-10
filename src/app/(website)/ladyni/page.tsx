import WelcomeBlock from "~/components/welcome_block";
import LadyniMatrix from "./matrix";
import { Collapsed } from "~/components/collapsible";

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
      <div className="w-full px-2 sm:px-6 py-2 flex flex-col gap-4">
        <Collapsed title={"Lorem ipsum dolor sit amet consectetur. Neque ullamcorper quis felis enim justo."}>
          <div className="flex flex-col gap-4">
            <b className="text-[20px]">Lorem ipsum dolor sit amet consectetur. Elementum vitae aliquam nunc velit congue.</b>
            <p className="text-[20px]">Consequat molestie lacus enim scelerisque duis felis aliquet scelerisque varius. Ac malesuada urna nunc enim vitae vitae felis eleifend. Ultrices condimentum non porta imperdiet. Nibh tellus at viverra vulputate urna penatibus ornare ultricies non. Diam tristique orci proin ullamcorper ipsum at sit lectus at. Luctus neque morbi ac venenatis eu. Eleifend nunc adipiscing ultrices gravida facilisi cursus consectetur. Tristique tincidunt sed at donec proin eget urna diam. Libero elementum consectetur sed eu sit adipiscing. Sed vitae vulputate tristique sagittis adipiscing. </p>
          </div>
        </Collapsed>
        <Collapsed title={"Lorem ipsum dolor sit amet consectetur. Neque ullamcorper quis felis enim justo."}>
          <div className="flex flex-col gap-4">
            <b className="text-[20px]">Lorem ipsum dolor sit amet consectetur. Elementum vitae aliquam nunc velit congue.</b>
            <p className="text-[20px]">Consequat molestie lacus enim scelerisque duis felis aliquet scelerisque varius. Ac malesuada urna nunc enim vitae vitae felis eleifend. Ultrices condimentum non porta imperdiet. Nibh tellus at viverra vulputate urna penatibus ornare ultricies non. Diam tristique orci proin ullamcorper ipsum at sit lectus at. Luctus neque morbi ac venenatis eu. Eleifend nunc adipiscing ultrices gravida facilisi cursus consectetur. Tristique tincidunt sed at donec proin eget urna diam. Libero elementum consectetur sed eu sit adipiscing. Sed vitae vulputate tristique sagittis adipiscing. </p>
          </div>
        </Collapsed>
        <Collapsed title={"Lorem ipsum dolor sit amet consectetur. Neque ullamcorper quis felis enim justo."}>
          <div className="flex flex-col gap-4">
            <b className="text-[20px]">Lorem ipsum dolor sit amet consectetur. Elementum vitae aliquam nunc velit congue.</b>
            <p className="text-[20px]">Consequat molestie lacus enim scelerisque duis felis aliquet scelerisque varius. Ac malesuada urna nunc enim vitae vitae felis eleifend. Ultrices condimentum non porta imperdiet. Nibh tellus at viverra vulputate urna penatibus ornare ultricies non. Diam tristique orci proin ullamcorper ipsum at sit lectus at. Luctus neque morbi ac venenatis eu. Eleifend nunc adipiscing ultrices gravida facilisi cursus consectetur. Tristique tincidunt sed at donec proin eget urna diam. Libero elementum consectetur sed eu sit adipiscing. Sed vitae vulputate tristique sagittis adipiscing. </p>
          </div>
        </Collapsed>
        <Collapsed title={"Lorem ipsum dolor sit amet consectetur. Neque ullamcorper quis felis enim justo."}>
          <div className="flex flex-col gap-4">
            <b className="text-[20px]">Lorem ipsum dolor sit amet consectetur. Elementum vitae aliquam nunc velit congue.</b>
            <p className="text-[20px]">Consequat molestie lacus enim scelerisque duis felis aliquet scelerisque varius. Ac malesuada urna nunc enim vitae vitae felis eleifend. Ultrices condimentum non porta imperdiet. Nibh tellus at viverra vulputate urna penatibus ornare ultricies non. Diam tristique orci proin ullamcorper ipsum at sit lectus at. Luctus neque morbi ac venenatis eu. Eleifend nunc adipiscing ultrices gravida facilisi cursus consectetur. Tristique tincidunt sed at donec proin eget urna diam. Libero elementum consectetur sed eu sit adipiscing. Sed vitae vulputate tristique sagittis adipiscing. </p>
          </div>
        </Collapsed>
      </div>
    </>
  )
}
