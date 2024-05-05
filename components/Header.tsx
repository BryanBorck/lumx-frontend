'use client'

import { NavBar } from './NavBar'
import { AvatarMenu } from './AvatarMenu'
import Pic from '../assets/logo_black.png'
import Pic2 from '../assets/logo_white.png'
import Image from 'next/image'
import { useScrollDirection } from '@/hooks/use-scroll-direction'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export function Header() {
  const scrollDirection = useScrollDirection(50)

  const [scrolled, setScrolled] = useState(false)
  const [flag, setFlag] = useState(true)
  const [translateClass, setTranslateClass] = useState('bg-transparent')

  if (scrollDirection === 'down' && !scrolled) {
    setScrolled(true)
    setTranslateClass(
      'border-b-[1px] border-secondary lg:shadow-2xl lg:backdrop-blur-md lg:bg-background/15 bg-background',
    )
  }

  console.log(translateClass)

  return (
    <div
      className={`transform ${translateClass} transition-transform duration-200 fixed w-full h-16 bottom-0 lg:top-0 z-20 flex flex-col justify-center`}
    >
      <div className='w-full bg-transparent flex flex-row justify-center items-center lg:px-12 h-14'>
        <Link href='/' className='h-16'>
          {useTheme().theme === 'dark' ? (
            <Image
              className='cursor-pointer h-[100%] w-auto py-2 hidden lg:inline-block'
              src={Pic2}
              width={100}
              height={100}
              alt=''
            />
          ) : (
            <Image
              className='cursor-pointer h-[100%] w-auto py-2 hidden lg:inline-block'
              src={Pic}
              width={100}
              height={100}
              alt=''
            />
          )}
          <p className='cursor-pointer text-foreground mx-2 hidden lg:inline-block'>
            Amigx
          </p>
        </Link>
        <div className='flex-1 flex flex-row h-[100%] justify-center items-center hidden lg:flex'>
          <NavBar flag={flag} />
        </div>

        <div className='h-[100%] flex flex-row justify-center items-center lg:space-x-6'>
          <AvatarMenu />

          {/* <div className="relative px-4 py-2 my-2 text-foreground rounded-lg shadow focus:outline-none truncate hidden lg:inline-block cursor-pointer" onClick={connectWallet}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5706f3] to-[#8905ff] rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center">
                    {signer 
                    ? "Connected: " +
                    account?.substring(0, 5) +
                    "..." +
                    account?.substring(38, 42) 
                    : "Connect Wallet"
                    }
                </div>
                {signer 
                ? "Connected: " +
                account?.substring(0, 5) +
                "..." +
                account?.substring(38, 42) 
                : "Connect Wallet"
                }
            </div> */}
        </div>
      </div>
    </div>
  )
}
