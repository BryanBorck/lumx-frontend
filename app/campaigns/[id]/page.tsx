'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Reveal, RevealWrapper } from '@/components/Reveal'
import Animation from '@/assets/home_animation.json'
import { userType } from '@/utils/props'
import { userData } from '@/utils/mock'
import { eventType } from '@/utils/props'
import { eventData } from '@/utils/mock'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'

// @ts-ignore
export default function CampaignDetails({ params: { id } }) {
  const [submitted, setSubmitted] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<userType | null>(null)
  const [event, setEvent] = useState<eventType | null>(null)

  const getRewardData = async () => {
    try {
      setLoading(true)
      setUser(userData[0])
      setEvent(eventData[Number(id) - 1])
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getRewardData()
  })

  const handleSubmit = async () => {
    try {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setLoading(false)
      setSubmitted(true)
      toast({
        title: 'Reward claimed! 🎉',
        description: 'Now you have a spot in the event!',
      })
    } catch (error) {
      console.error(error)
    }
  }

  function formatCurrency(value: string): string {
    const numberValue = parseFloat(value)
    if (loading) {
      return 'Loading...'
    }
    if (isNaN(numberValue)) {
      return 'Invalid value'
    }
    return `R$ ${numberValue.toFixed(2).replace('.', ',')}`
  }

  return (
    <div className='w-[100vw] mt-16'>
      <RevealWrapper>
        <div className='p-12 flex flex-col items-center'>
          <div className='shadow-2xl border-lg w-[60%] borded-primary border-[2px] overflow-hidden'>
            <div className='h-[70vh] flex flex-row'>
              <div className='w-[60%] h-full relative overflow-hidden bg-red-600'>
                <Image
                  src={event?.image as unknown as string}
                  alt=''
                  layout='fill'
                  className='grayscale brightness-75'
                  objectFit='cover'
                  objectPosition='top'
                />
                <div className='absolute z-10 w-full h-full flex flex-col items-start p-12 text-white space-y-4'>
                  <p className='font-bold text-primary text-6xl'>
                    {event?.name} 2024
                  </p>
                  <p className='font-light text-lg'>{event?.date}</p>
                  <p className='font-light text-lg'>{event?.location}</p>
                  <p className='font-light text-lg'>@{event?.instagram}</p>
                  <p className='font-light text-sm pt-6'>
                    {event?.description}
                  </p>
                </div>
              </div>
              <div className='w-[40%] h-full relative overflow-hidden'>
                <CardHeader>
                  <div className='flex flex-col justify-center items-center space-y-2'>
                    <CardTitle className='text-primary'>
                      Promote this Event!
                    </CardTitle>
                    <CardDescription>
                      Earn tokens promoting this event
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Player
                    src={Animation}
                    className='player h-28'
                    loop
                    autoplay
                  />
                  <div className='flex flex-col justify-center items-center space-y-2'>
                    <div className='flex flex-col justify-center items-start space-x-2 w-[250px]'>
                      <div className='px-4 flex flex-row space-x-2 items-center'>
                        <p className='font-bold text-primary'>33%</p>
                        <p className='font-light text-primary'>Completed</p>
                      </div>
                      <Progress value={33} className='w-full mt-4 mb-2 h-3' />
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-4 w-[250px] pt-6'>
                      <p className='font-light '>
                        Tokens earned by each referral
                      </p>
                      <p className='text-primary font-bold text-xl'>
                        {event?.tokenEarned} FTX
                      </p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-4 w-[250px]'>
                      <p className='font-light '>Ticket Price:</p>
                      <p className='text-primary font-bold text-xl'>
                        {formatCurrency(event?.price as unknown as string)}
                      </p>
                    </div>
                    <div className='pt-4'>
                      <Button
                        className='text-background'
                        onClick={() => handleSubmit()}
                      >
                        Participate in this Campaign
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
