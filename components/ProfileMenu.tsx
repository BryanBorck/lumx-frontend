'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarCheck, CreditCard, TicketCheck, UserCog } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { userType } from '@/utils/props'
import { userData } from '@/utils/mock'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageBkg from '@/assets/bkg.jpeg'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'

export default function ProfileMenu() {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<userType | null>(null)

  const getCardData = async () => {
    try {
      setLoading(true)
      setUser(userData[0])
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCardData()
  })

  return (
    <Tabs defaultValue='profile' className='w-full flex flex-col items-center'>
      <div className='w-[80%] flex flex-row gap-10 mb-24'>
        <div className='shadow-2xl border-[1px] border-secondary rounded-lg w-[300px] h-[220px] py-4'>
          <TabsList className='flex flex-col w-full p-2 space-y-2 justify-start'>
            <TabsTrigger
              className='w-full space-x-4 px-12 justify-start data-[state=active]:text-primary'
              value='profile'
            >
              <UserCog />
              <p>Profile Data</p>
            </TabsTrigger>
            <TabsTrigger
              className='w-full space-x-4 px-12 justify-start data-[state=active]:text-primary'
              value='payment'
            >
              <CreditCard />
              <p>Payment</p>
            </TabsTrigger>
            <TabsTrigger
              className='w-full space-x-4 px-12 justify-start data-[state=active]:text-primary'
              value='campaigns'
            >
              <CalendarCheck />
              <p>My Campaigns</p>
            </TabsTrigger>
            <TabsTrigger
              className='w-full space-x-4 px-12 justify-start data-[state=active]:text-primary'
              value='tickets'
            >
              <TicketCheck />
              <p>My Tickets</p>
            </TabsTrigger>
          </TabsList>
        </div>
        <div className='shadow-2xl border-[1px] border-secondary rounded-lg flex-1 py-8 h-[600px]'>
          <div className='w-full h-full overflow-y-scroll'>
            <TabsContent value='profile'>
              <div className='h-[200px]'>
                <div className='bg-cover h-36 w-full text-background relative overflow-hidden px-4 mb-4'>
                  <Image
                    src={imageBkg}
                    alt=''
                    className='absolute object-cover w-full'
                  />
                  <div className=' absolute z-10 w-full h-full flex flex-row items-center px-6'>
                    <Image
                      src={user?.avatar as unknown as string}
                      alt=''
                      className='w-24 h-24 shadow-xl rounded-full'
                    />
                    <div className='flex flex-col ml-6'>
                      <p className='text-2xl font-bold text-background'>
                        {user?.name}
                      </p>
                      <p className='text-lg font-light text-background'>
                        @{user?.instagram}
                      </p>
                    </div>
                    <div className='absolute right-12 top-8'>
                      <p className='px-4 mb-2'>Invite Code</p>
                      <div className='border-background border-[2px] font-bold w-[150px] py-1 rounded-lg px-4'>
                        <p>{user?.code}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-12 pt-4'>
                  <CardTitle>Update Information</CardTitle>
                  <CardDescription className='mt-8'>
                    <Input
                      placeholder='Name'
                      className='mb-4'
                      value={user?.name}
                    />
                    <Input
                      placeholder='Instagram'
                      className='mb-4'
                      value={user?.instagram}
                    />
                    <Input
                      placeholder='Email'
                      className='mb-4'
                      value={user?.email}
                    />
                    <Input
                      placeholder='Location'
                      className='mb-4'
                      value={user?.location}
                    />
                    <Button className='w-full text-background'>Update</Button>
                  </CardDescription>
                </div>
              </div>
            </TabsContent>
            <TabsContent value='payment'>
              <h1 className='px-12 text-xl font-bold text-primary'>
                Payment Information
              </h1>
              <div className='px-12 pt-4'>
                <CardDescription className='mt-8'>
                  <Label className='p-2'>Pic Code</Label>
                  <Input
                    placeholder='Pix Code'
                    className='mb-4 mt-2'
                    value={user?.pix}
                  />
                  <Label className='p-2'>Token Balance</Label>
                  <Input
                    placeholder='Instagram'
                    className='mb-4 mt-2'
                    value={user?.instagram}
                  />
                  <Label className='p-2'>Tokens to withdraw</Label>
                  <Input
                    placeholder='Email'
                    className='mb-4 mt-2'
                    value={user?.email}
                  />
                  <Button className='w-full text-background'>Widthdraw</Button>
                </CardDescription>
              </div>
            </TabsContent>
            <TabsContent value='campaigns'>
              <h1 className='px-12 text-xl font-bold text-primary'>
                My Campaigns
              </h1>
              <div className='grid grid-cols-3 gap-6 p-12'>
                {user?.campaigns.map((campaign, index) => {
                  return (
                    <Link
                      href='/campaigns/[id]'
                      as={`/campaigns/${campaign}`}
                      key={index}
                    >
                      <Card
                        key={index}
                        className='aspect-square shadow-lg cursor-pointer'
                      >
                        <CardHeader>
                          <Image
                            src={user?.avatar}
                            alt=''
                            className='w-full h-36 object-cover rounded-lg'
                          />
                        </CardHeader>
                        <CardContent>
                          <CardTitle>CIA</CardTitle>
                          <CardDescription>
                            <p>Uberaba</p>
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <p>11/01/2000</p>
                        </CardFooter>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </TabsContent>
            <TabsContent value='tickets' className='pb-12'>
              <h1 className='px-12 text-xl font-bold text-primary'>
                My Tickets
              </h1>
              <div className='grid grid-cols-3 gap-6 p-12'>
                {user?.tickets.map((ticket, index) => {
                  return (
                    <Link
                      href='/rewards/[id]'
                      as={`/rewards/${ticket}`}
                      key={index}
                    >
                      <Card
                        key={index}
                        className='aspect-square shadow-lg cursor-pointer'
                      >
                        <CardHeader>
                          <Image
                            src={user?.avatar}
                            alt=''
                            className='w-full h-36 object-cover rounded-lg'
                          />
                        </CardHeader>
                        <CardContent>
                          <CardTitle>CIA</CardTitle>
                          <CardDescription>
                            <p>Uberaba</p>
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <p>11/01/2000</p>
                        </CardFooter>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </TabsContent>
          </div>
        </div>
      </div>
    </Tabs>
  )
}
