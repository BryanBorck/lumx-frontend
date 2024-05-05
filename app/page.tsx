import { Hero } from '@/components/Hero'
import { Reveal, RevealWrapper } from '@/components/Reveal'
import { About } from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center overflow-x-hidden w-full'>
      <Hero />
      <About />
      <Footer />
    </main>
  )
}
