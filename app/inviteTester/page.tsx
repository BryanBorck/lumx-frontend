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
import Animation3 from '@/assets/rocket_animation.json'
import { userType } from '@/utils/props'
import { userData } from '@/utils/mock'
import { eventType } from '@/utils/props'
import { eventData } from '@/utils/mock'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'

export default function InviteTester() {
  const [submitted, setSubmitted] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false)
  const [eventId, setEventId] = useState<string>('')
  const [invitecode, setInvitecode] = useState<string>('')
  const [options, setOptions] = useState<eventType[]>([])

  const getSelectData = async () => {
    try {
      setLoading(true)
      setOptions(eventData)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getSelectData()
  })

  const handleSubmit = async () => {
    try {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Event ID:', eventId)
      console.log('Invite code:', invitecode)

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_id: eventId,
          referral_code: invitecode,
        })
      
      }

      const url = process.env.NEXT_PUBLIC_API_URL + "/send";


      const response = await fetch(url, options);

      const data = await response.json();

      console.log(data);

      const urlTx = "https://evmexplorer.tanssi-chains.network/tx/" + data.tx_id + "?rpcUrl=https%3A%2F%2Ffraa-flashbox-3233-rpc.a.stagenet.tanssi.network";

      window.open(urlTx);


      setLoading(false)
      setSubmitted(true)
      toast({
        title: 'Ticket bought! 🎉',
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
                        Buy a Ticket!
                      </CardTitle>
                      <CardDescription>
                        Test the API to buy the ticket using a friend invite
                        code
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Reveal>
                <Reveal delay={0.3}>
                  <CardContent>
                    <Player
                      src={Animation3}
                      className='player h-36'
                      loop
                      autoplay
                    />
                    <div className='flex flex-col justify-center items-center space-y-4 mt-6'>
                      <div className='flex flex-row justify-start items-center space-x-2 w-[300px]'>
                        <Select
                          value={eventId}
                          onValueChange={setEventId}
                          defaultValue='1'
                        >
                          <SelectTrigger className='w-[300px]'>
                            <SelectValue placeholder='Select an event' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='1'>CIA</SelectItem>
                            <SelectItem value='2'>Tusca</SelectItem>
                            <SelectItem value='3'>Hackathon</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='flex flex-row justify-start items-center space-x-2 w-[300px]'>
                        <Input
                          placeholder='Invite code'
                          className='w-[300px]'
                          value={invitecode}
                          onChange={e => setInvitecode(e.target.value)}
                        />
                      </div>
                      <div className='flex flex-row justify-start items-center space-x-2 w-[300px] px-2'>
                        <p className='font-light  text-sm'>Price:</p>
                        <p className='text-primary font-bold text-sm'>
                          R$ 100,00
                          {/* VER DEPOIS */}
                        </p>
                      </div>
                      <div className='pt-4'>
                        {loading ? (
                          <Button disabled>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            Please wait
                          </Button>
                        ) : (
                          <Button
                            className='text-background'
                            onClick={() => handleSubmit()}
                          >
                            Buy Ticket
                          </Button>
                        )}
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
