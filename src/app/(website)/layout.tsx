import { ReactNode } from "react"
import { Footer } from "~/components/footer"
import { Navbar } from "~/components/Navbar"



export default function MainLayout({children}:
  {
    children: ReactNode
  }){
  return(
    <main className="overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
