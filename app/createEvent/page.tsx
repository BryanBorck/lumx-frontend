import '../../styles/granygradient.css'
import { Reveal, RevealWrapper } from '@/components/Reveal'
import { EventForm } from '@/components/EventForm'

export default function CreateEvent() {
  return (
    <main className='flex min-h-screen flex-col items-center overflow-x-hidden'>
      <div className='h-16 w-full relative overflow-hidden'>
        <div className='hero h-[100%]'>
          <div className='overlay'></div>
        </div>
      </div>
      <RevealWrapper>
        <div className='w-[100vw] h-[85vh] pb-[5vh] relative overflow-hidden flex flex-col items-center justify-center'>
          <Reveal delay={0.1}>
            <div className='bg-background h-[70vh] w-[600px] rounded-lg p-6 border-b-[1px] border-secondary lg:shadow-2xl'>
              <EventForm />
            </div>
          </Reveal>
        </div>
      </RevealWrapper>
    </main>
  )
}
