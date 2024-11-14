import { AlignRight } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip"
import { cn } from "~/lib/utils"


const items = [
  {
    href:"/admin/education",
    title:"Обучение"
  },
  {
    href:"/admin/services",
    title:"Услуги"
  },
  {
    href:"/admin/info",
    title:"Расшифровки"
  },
  {
    href:"/admin/requests",
    title:"Запросы"
  },
  {
    href:"/admin/calls",
    title:"Обратная связь"
  },
]



export function Sidebar({ className, mobile }:
  {
    className?:string,
    mobile?:boolean
  }){
  return (
    <>
      {
        !mobile ? (
          <aside className={cn(className, "min-w-96 hidden sm:block")}>
            <div className="bg-white size-full rounded-md  flex flex-col gap-3 p-4">
              <TooltipProvider>
              {
                items.map((item) =>(
                  <SidebarItem key={item.title} {...item} />
                ))
              }
              </TooltipProvider>
            </div>
          </aside>
        ) : (
          <Sheet>
            <SheetTrigger>
              <AlignRight />
            </SheetTrigger>
            <SheetContent className="space-y-6">
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <div className="w-full flex flex-col items-center gap-6">
                <TooltipProvider>
                {
                  items.map((item) =>(
                    <SidebarItem key={item.title} {...item} />
                  ))
                }
                </TooltipProvider>
              </div>
            </SheetContent>
          </Sheet>
        )

      }
    </>
  )
}


function SidebarItem({href,title}:{
  href:string,
  title:string
}){

  return (
    <Tooltip>
      <TooltipTrigger className="w-full h-10 hover:bg-gray-100 px-3 rounded-xl transition-colors">
        <Link href={href} className="w-full inline-block text-left">{title}</Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
