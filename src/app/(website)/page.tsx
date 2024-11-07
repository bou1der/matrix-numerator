import AboutMeBlock from "./about";
import InfoBlock from "./info_block";
import WelcomeBlock from "./welcome_block";
import MyServices from "./MyServices";

export default function Home(){
  return (
    <>
      <WelcomeBlock/>
      <InfoBlock />
      <MyServices/>
      <AboutMeBlock />
    </>
  )
}
