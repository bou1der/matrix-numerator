import { ReactNode } from "react"
import { Footer } from "~/components/footer"
import { Navbar } from "~/components/Navbar"



export default function MainLayout({children}:
  {
    children: ReactNode
  }){
  return(
    <main>
      <Navbar />
      <div className="w-full h-full">
        {children}
      </div>
      <Footer />
    </main>
  )
}
