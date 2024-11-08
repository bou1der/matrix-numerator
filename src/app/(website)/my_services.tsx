import { CardService } from "~/components/CardServices";



export default function MyServices(){
  return (
    <div className="w-screen min-h-screen py-16 px-2 sm:py-20 sm:px-10 bg-secondary flex gap-16 flex-col justify-around items-center sm:items-start overflow-hidden">
          <div className="w-full">
            <h1 className="text-secondary-foreground max-w-[620px] text-center sm:text-left">
              Мои услуги для вашего <b className="italic"> духовного </b> роста
            </h1>
          </div>
          <div className="w-full flex flex-row items-center flex-wrap justify-center xl:justify-between gap-20">
            <CardService>
              Lorem ipsum dolor sit amet consectetur.
              Neque ullamcorper quis felis enim justo.
              Dictumst felis semper tortor volutpat.
            </CardService>
            <CardService>
              Lorem ipsum dolor sit amet consectetur.
              Neque ullamcorper quis felis enim justo.
              Dictumst felis semper tortor volutpat.
            </CardService>
            <CardService>
              Lorem ipsum dolor sit amet consectetur.
              Neque ullamcorper quis felis enim justo.
              Dictumst felis semper tortor volutpat.
            </CardService>
            <CardService>
              Lorem ipsum dolor sit amet consectetur.
              Neque ullamcorper quis felis enim justo.
              Dictumst felis semper tortor volutpat.
            </CardService>
          </div>
    </div>
  )
}
