'use client'

import Pic from '../assets/CIA_bkg_WB.png'
import Image from 'next/image'
import '../styles/granygradient.css'
import '../styles/typedEffect.css'
import Link from 'next/link'
import { Reveal, RevealWrapper } from './Reveal'
import { Button } from './ui/button'

export function Hero() {
  return (
    <div className='w-[100vw] relative overflow-hidden'>
      <RevealWrapper>
        <div className='hero h-[100vh]'>
          <div className='overlay'></div>
          <div className='flex flex-col'>
            <div className='z-10 w-full flex flex-col items-center justify-center'>
              <div className='h-fullflex flex-col items-center justify-center'>
                <Reveal delay={0.1}>
                  <p className='typed_out text-background font-bold text-8xl py-4'>
                    Festx
                  </p>
                </Reveal>
              </div>
            </div>
            <div className='z-10 w-full flex flex-col items-center justify-center mt-16'>
              <Reveal delay={0.3}>
                <div className='px-[15%]'>
                  <p className='text-background font-light text-3xl py-4 line-clamp-2'>
                    We bring influencers and event promoters together to create
                    authentic and meaningful partnerships.
                  </p>
                </div>
              </Reveal>
              <div className='flex flex-row justify-between gap-4 mt-16'>
                <Reveal delay={0.5}>
                  <Link href='/' legacyBehavior passHref>
                    <Button variant='outline'>Create Event</Button>
                  </Link>
                </Reveal>
                <Reveal delay={0.5}>
                  <Link href='/' legacyBehavior passHref>
                    <Button variant='outline'>Create Profile</Button>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
          <Image
            className='absolute bottom-0 blur-[3px] cursor-pointer w-[100%] h-auto lg:inline-block'
            src={Pic}
            width={924}
            height={657}
            alt=''
          />
        </div>
      </RevealWrapper>
    </div>
  )
}
