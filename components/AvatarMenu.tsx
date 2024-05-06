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

export function AvatarMenu() {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<userType | null>(null)

  const {name, referralCode, walletId, walletAddress, email} = React.useContext(AuthContext) as any;

  const getUserData = async () => {
    try {
      setLoading(true)
      setUser(userData[0])
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUserData()
  })

  return (
    <NavigationMenu>
      <NavigationMenuViewport className='' />
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {!loading && user && (
              <div className='w-[300x] flex flex-row items-center h-full space-x-4'>
                <div className='space-y-2'>
                  <p className='text-xs font-medium leading-none'>Balance</p>
                  <p className='text-xs text-primary font-bold leading-none'>
                    {user?.balance} FTX
                  </p>
                </div>
                <div className='space-y-2'>
                  <p className='text-xs font-medium leading-none'>
                    {user?.name}
                  </p>
                  <p className='text-xs text-primary font-bold leading-none'>
                    {referralCode}
                  </p>
                </div>
                <Avatar className='hover:cursor-pointer'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            )}
            {!user && (
              <div className='w-[300px] h-full flex flex-row items-center justify-center'>
                <div className='text-primary font-bold leading-none'>
                  Sign In
                </div>
              </div>
            )}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-1 p-2 md:w-[200px] lg:w-[300px]'>
              <ListItem href='/profile' title='Profile'></ListItem>
              <div className='flex flex-col items-center justify-center w-[100%] hidden lg:flex'>
                <ModeToggle />
              </div>
              <ListItem href='/' title='Sign Out'></ListItem>
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
