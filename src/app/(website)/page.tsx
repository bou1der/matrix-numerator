import WelcomeBlock from "~/components/welcome_block";
import AboutMeBlock from "./about";
import InfoBlock from "./info_block";
import MyServices from "./my_services";
import { EducationBlock } from "./education";


export default function Home(){
  return (
    <>
      <WelcomeBlock >
        <h1 className="text-secondary-foreground text-center max-w-[832px] ">
          Раскройте тайны с «<b className="italic text-2xl sm:text-5xl">Ключом Души</b>» — уникальные расчеты для вашего пути
        </h1>
        <p className="text-secondary-foreground max-w-[832px] text-center">
          Откройте для себя персональную нумерологическую консультацию — ваш путь к самопознанию и гармонии начинается здесь
        </p>
      </WelcomeBlock>
      <InfoBlock />
      <MyServices/>
      <EducationBlock />
      <AboutMeBlock />
    </>
  )
}
