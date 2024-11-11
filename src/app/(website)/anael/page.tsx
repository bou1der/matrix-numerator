import WelcomeBlock from "~/components/welcome_block"
import { AnaelMatrix } from "./matrix"
import { Collapsed } from "~/components/collapsible"



export default function AnaelPage(){

  return (
    <>
      <WelcomeBlock>
          <h1 className="text-secondary-foreground text-center max-w-[832px] ">
            Кармическая матрица Анаэль
          </h1>
          <p className="text-secondary-foreground max-w-[832px] text-center">
            <b>Кармическая матрица Анаэль </b> — это метод, который помогает раскрыть скрытые стороны вашей судьбы и понять, какие кармические уроки и задачи вы несете из прошлых воплощений. С её помощью можно выявить сильные и слабые стороны, определить препятствия и пути их преодоления, а также понять глубинные причины повторяющихся событий в вашей жизни. Анализируя кармическую матрицу, вы сможете найти ключи к своему духовному росту и гармонии, открыть новые перспективы для личностного и профессионального развития.
          </p>
      </WelcomeBlock>
      <AnaelMatrix />
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
