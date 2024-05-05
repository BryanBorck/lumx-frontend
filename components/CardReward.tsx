'use client'

import { BarChart2, Gauge } from 'lucide-react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'

export function CardReward({
  id,
  name,
  description,
  image,
  location,
  instagram,
  date,
  category,
  tokenSupply,
  tokenEarned,
  tokenSpent,
  price,
  loading,
}: {
  id: number
  name: string
  description: string
  image: StaticImageData
  location: string
  instagram: string
  date: string
  category: string
  tokenSupply: string
  tokenEarned: string
  tokenSpent: string
  price: string
  loading: boolean
}) {
  return (
    <Link href={`/rewards/${id}`}>
      <div className='aspect-square bg-background rounded-xl shadow-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 group border-secondary border-[1px]'>
        {loading ? (
          <div className='animate-pulse bg-secondary w-full h-full'></div>
        ) : (
          <div className='w-full h-full bg-transparent absolute inset-0 z-10'>
            <div className='relative aspect-[2/1] w-full rounded-t-xl overflow-hidden border-secondary border-[1px]'>
              <Image
                src={image}
                alt='fund'
                className='absolute aspect-[2/1] object-cover group-hover:brightness-90 top-0 left-0 w-full'
              />
              <div className='absolute flex flex-row top-4 left-4 w-full'>
                <div className='px-4'>
                  <p className='text-white font-bold text-lg'>{name}</p>
                  <p className='text-white font-thin text-xs'>{location}</p>
                  <p className='text-white font-thin text-xs'>{date}</p>
                </div>
              </div>
              <div className='absolute flex flex-row bottom-4 left-4 w-full'>
                <p className='text-foreground font-thin text-sm'>
                  {description}
                </p>
              </div>
              <div
                className={`absolute w-full -bottom-10 h-24 opacity-50 bg-gradient-to-t to-transparent`}
              />
            </div>
            <div className='aspect-[2/1] p-4 space-y-2 py-6 relative'>
              <Badge
                variant='outline'
                className='bg-gradient-to-b from-primary to-[#8028c3] text-white px-4 py-1'
              >
                {category}
              </Badge>
              <div className='flex flex-row items-center space-x-2'>
                <p className='text-sm'>Price</p>
                <p className='font-bold text-lg'>{tokenSpent} FTX</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
