import { Header, Footer } from "@/layout"
import { Hero, Projects, Contact } from "@/sections"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
