import { CardService } from "~/components/CardServices";



export default function MyServices(){
  return (
    <div className="w-screen min-h-screen py-16 px-2 sm:py-20 sm:px-5 bg-secondary flex justify-center items-center">
      <div className="w-full h-full grow flex flex-col justify-center items-start space-y-16">
        <h1 className="text-secondary-foreground max-w-[620px]">
          Мои услуги для вашего <b className="italic"> духовного </b> роста
        </h1>
        <div className="w-full flex flex-row justify-between gap-20">
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
    </div>
  )
}
