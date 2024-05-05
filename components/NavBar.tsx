'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Pic from '../assets/logo_white.png'
import Image from 'next/image'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Campaigns',
    href: '/campaigns',
    description:
      'See opportunities to invite people to events and get rewards for it',
  },
  {
    title: 'Rewards',
    href: '/rewards',
    description:
      'Invite people to more events trough referral program and get ticket rewards',
  },
]

export function NavBar({ flag }: { flag: boolean }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={flag === true ? '' : 'text-white'}>
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-2 p-3 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#6c18d0] to-[#8028c3] p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    <Image
                      className='cursor-pointer h-10 w-10 hidden lg:inline-block'
                      src={Pic}
                      width={100}
                      height={100}
                      alt=''
                    />
                    <div className='mb-2 mt-4 text-lg font-bold text-white'>
                      Amigx
                    </div>
                    <p className='text-sm leading-tight text-white font-light'>
                      Marketplace to get reward as affiliated
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/createEvent' title='Promoter'>
                Create an event campaing and get promoted by local influencers
              </ListItem>
              <ListItem href='/createProfile' title='Influencer'>
                Sign up to create your new influencer profile
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={flag === true ? '' : 'text-white'}>
            Explore More
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-2 p-3 md:w-[300px] lg:w-[400px]'>
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/profile' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className={flag === true ? '' : 'text-white'}>Profile</p>
            </NavigationMenuLink>
          </Link>
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
          <p className='line-clamp-3 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
