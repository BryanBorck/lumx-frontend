'use client'

import { Reveal, RevealWrapper } from '@/components/Reveal'
import { useEffect, useState } from 'react'
import { eventType } from '@/utils/props'
import { eventData } from '@/utils/mock'
import { CardCampaign } from '@/components/CardCampaign'

export default function ExplorerCampaigns() {
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
    <div className='w-[100vw] relative max-w-screen-2xl'>
      <div className='p-6 w-full md:p-12 lg:p-12 mb-24'>
        <RevealWrapper>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {events.map((event, index) => {
              return (
                <div key={index}>
                  <Reveal delay={index * 0.2}>
                    <CardCampaign
                      id={event.id}
                      name={event.name}
                      description={event.description}
                      image={event.image}
                      location={event.location}
                      instagram={event.instagram}
                      date={event.date}
                      category={event.category}
                      tokenSupply={event.tokenSupply}
                      tokenEarned={event.tokenEarned}
                      tokenSpent={event.tokenSpent}
                      price={event.price}
                      loading={loading}
                    />
                  </Reveal>
                </div>
              )
            })}
          </div>
        </RevealWrapper>
      </div>
    </div>
  )
}
