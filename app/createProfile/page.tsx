import { ProfileForm } from '@/components/ProfileForm'
import '../../styles/granygradient.css'
import { Reveal, RevealWrapper } from '@/components/Reveal'

export default function CreateProfile() {
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
            <div className='bg-background h-[60vh] w-[600px] rounded-lg p-6 border-b-[1px] border-secondary lg:shadow-2xl'>
              <ProfileForm />
            </div>
          </Reveal>
        </div>
      </RevealWrapper>
    </main>
  )
}
