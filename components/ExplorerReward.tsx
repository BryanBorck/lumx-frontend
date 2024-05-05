'use client'

import { Reveal, RevealWrapper } from '@/components/Reveal'
import { useEffect, useState } from 'react'
import { eventType } from '@/utils/props'
import { eventData } from '@/utils/mock'
import { CardReward } from '@/components/CardReward'

export default function ExplorerRewards() {
  const [loading, setLoading] = useState<boolean>(false)

  const [events, setEvents] = useState<eventType[]>([])

  const getCardData = async () => {
    try {
      setLoading(true)
      setEvents(eventData)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCardData()
  })

  return (
    <div className='w-[100vw] relative'>
      <div className='p-6 w-full md:p-12 lg:p-12 mb-24'>
        <RevealWrapper>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {events.map((event, index) => {
              return (
                <Reveal delay={index * 0.2}>
                  <CardReward
                    key={index}
                    id={event.id}
                    name={event.name}
                    description={event.description}
                    avatar={event.avatar}
                    image={event.image}
                    location={event.location}
                    trend={event.trend}
                    comission={event.comission}
                    performance={event.performance}
                    loading={loading}
                  />
                </Reveal>
              )
            })}
          </div>
        </RevealWrapper>
      </div>
    </div>
  )
}
