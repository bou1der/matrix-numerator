import WelcomeBlock from "~/components/welcome_block";
import { PifagorMatrix } from "./matrix";
import { Collapsed } from "~/components/collapsible";



export default function PifagorPage(){

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
