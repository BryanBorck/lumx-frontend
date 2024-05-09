'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/avatar-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from './mode-toggle'
import { userType } from '@/utils/props'
import { userData } from '@/utils/mock'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import AuthContext from '@/app/contexts'
import Link from 'next/link'

export function AvatarMenu() {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<userType | null>(null)
  const [balance, setBalance] = useState<number>(0)

  const {
    name,
    setName,
    referralCode,
    setReferralCode,
    walletId,
    setWalletId,
    walletAddress,
    setWalletAddress,
    email,
    setEmail,
  } = React.useContext(AuthContext) as any

  const getBalanceData = async () => {
    try {
      setLoading(true)

      const options = {
        method: 'GET',
      }

      const url =
        process.env.NEXT_PUBLIC_API_URL +
        '/influencers/' +
        walletId +
        '/balance'

      console.log(url)

      const response = await fetch(url, options)
      const data = await response.json()

      console.log(data)
      const { balance } = data

      setBalance(balance)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const signOutHandler = async () => {
    setEmail('')
    setName('')
    setReferralCode('')
    setWalletId('')
    setWalletAddress('')
  }

  useEffect(() => {
    getBalanceData()
  })

  useEffect(() => {
    signOutHandler()
  }, [])

  return (
    <NavigationMenu>
      <NavigationMenuViewport className='' />
      <NavigationMenuList>
        <NavigationMenuItem>
          {!loading && name && (
            <NavigationMenuTrigger>
              <div className='w-[300x] flex flex-row items-center h-full space-x-4'>
                <div className='space-y-2'>
                  <p className='text-xs font-medium leading-none'>Balance</p>
                  <p className='text-xs text-primary font-bold leading-none'>
                    {balance} FTX
                  </p>
                </div>
                <div className='space-y-2'>
                  <p className='text-xs font-medium leading-none'>{name}</p>
                  <p className='text-xs text-primary font-bold leading-none'>
                    {referralCode}
                  </p>
                </div>
                <Avatar className='hover:cursor-pointer'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </NavigationMenuTrigger>
          )}
          {!name && (
            <Link href='/signin'>
              <Button className=' text-background'>Sign In</Button>
            </Link>
          )}
          <NavigationMenuContent>
            <ul className='grid gap-1 p-2 md:w-[200px] lg:w-[300px]'>
              <ListItem href='/profile' title='Profile'></ListItem>
              <div className='flex flex-col items-center justify-center w-[100%] hidden lg:flex'>
                <ModeToggle />
              </div>
              {/* <Link href='/'> */}
              <div
                onClick={signOutHandler}
                className='cursor-pointer text-sm font-medium leading-none block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
              >
                Sign Out
              </div>
              {/* </Link> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
