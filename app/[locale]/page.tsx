import { Header, Footer } from "@/layout"
import { Hero, About, Skills, Experience, Projects, Achievements, Contact } from "@/sections"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
