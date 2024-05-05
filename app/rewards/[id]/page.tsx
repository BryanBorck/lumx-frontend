'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import Animation from '@/assets/congrats_animation.json'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Reveal, RevealWrapper } from '@/components/Reveal'
import Animation2 from '@/assets/ticket_animation.json'
import { userType } from '@/utils/props'
import { userData } from '@/utils/mock'
import { eventType } from '@/utils/props'
import { eventData } from '@/utils/mock'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from '@/components/ui/use-toast'

// @ts-ignore
export default function RewardsDetails({ params: { id } }) {
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

  return (
    <div className='w-[100vw] mt-16'>
      <RevealWrapper>
        <div className='p-12 flex flex-col items-center'>
          <div className='shadow-2xl border-lg w-[60%] borded-secondary border-[1px]'>
            {!submitted ? (
              <div className='h-[70vh]'>
                <Reveal delay={0.1}>
                  <CardHeader>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                      <CardTitle className='text-primary'>
                        Get Reward!
                      </CardTitle>
                      <CardDescription>
                        Exchange Tokens to get this ticket reward
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Reveal>
                <Reveal delay={0.3}>
                  <CardContent>
                    <Player
                      src={Animation2}
                      className='player h-36'
                      loop
                      autoplay
                    />
                    <div className='flex flex-col justify-center items-center space-y-4 mt-6'>
                      <div className='flex flex-row justify-start items-center space-x-2 w-[300px]'>
                        <p className='font-light '>Your event:</p>
                        <p className='text-primary font-bold text-xl'>
                          {event?.name}
                        </p>
                      </div>
                      <div className='flex flex-row justify-start items-center space-x-2 w-[300px]'>
                        <p className='font-light '>Your balance:</p>
                        <p className='text-primary font-bold text-xl'>
                          {user?.balance} FTX
                        </p>
                      </div>
                      <div className='flex flex-row justify-start items-center space-x-2 w-[300px]'>
                        <p className='font-light '>Price:</p>
                        <p className='text-primary font-bold text-xl'>
                          {event?.tokenSpent} FTX
                        </p>
                      </div>
                      <div className='pt-4'>
                        <Button
                          className='text-background'
                          onClick={() => handleSubmit()}
                        >
                          Get Reward
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Reveal>
              </div>
            ) : (
              <div className='h-[70vh]'>
                <CardHeader>
                  <div className='flex flex-col justify-center items-center space-y-2'>
                    <CardTitle>Thank you!</CardTitle>
                    <CardDescription>Keep using Festx</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-col justify-center items-center space-y-16'>
                    <Player
                      src={Animation}
                      className='player h-36'
                      loop
                      autoplay
                    />
                    <div className='flex flex-row space-x-4'>
                      <p>Now spread more invites and get more</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center w-full items-center mt-6'>
                    <Link href='/campaigns'>
                      <Button variant='outline'>Explore more</Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            )}
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
