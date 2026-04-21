import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Industries from "@/components/Industries"
import Partners from "@/components/Partners"
import Process from "@/components/Process"
import Solutions from "@/components/Solutions"

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Solutions />
      <Process />
      <Industries />
      <Partners />
      <Footer />
    </>
  )
}