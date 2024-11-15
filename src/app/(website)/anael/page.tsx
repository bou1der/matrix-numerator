import WelcomeBlock from "~/components/welcome_block"
import { AnaelMatrix } from "./matrix"
import { Collapsed } from "~/components/collapsible"
import { api } from "~/trpc/main/server"



export default async function AnaelPage(){
  const infos = await api.information.getAll({type:"ANAEL"})

  return (
    <>
      <WelcomeBlock theme="ANAEL">
          <h1 className="text-secondary-foreground text-center max-w-[832px] ">
            Кармическая матрица Анаэль
          </h1>
          <p className="text-secondary-foreground max-w-[832px] text-center">
            <b>Кармическая матрица Анаэль </b> — это метод, который помогает раскрыть скрытые стороны вашей судьбы и понять, какие кармические уроки и задачи вы несете из прошлых воплощений. С её помощью можно выявить сильные и слабые стороны, определить препятствия и пути их преодоления, а также понять глубинные причины повторяющихся событий в вашей жизни. Анализируя кармическую матрицу, вы сможете найти ключи к своему духовному росту и гармонии, открыть новые перспективы для личностного и профессионального развития.
          </p>
      </WelcomeBlock>
      <AnaelMatrix />
      <div className="w-full px-2 sm:px-10 container my-20 mx-auto py-2 flex flex-col gap-4">
        {
          infos.map((el) => (
            <Collapsed key={el.id} text={el.description} title={el.title} />
          ))
        }
      </div>
    </>
  )
}
