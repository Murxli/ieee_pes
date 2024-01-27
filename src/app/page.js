import Image from 'next/image'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Events from '@/sections/Events'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <About />
      {/* <Events /> */}
      <Footer />
    </main>
  )
}
