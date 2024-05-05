'use client'

import { BarChart2, Gauge } from 'lucide-react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'

export function CardCampaign({
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
    <Link href={`/campaigns/${id}`}>
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
              {/* <div className='absolute flex flex-col items-end top-4 right-4 w-full'>
                <div
                  className={`w-20 flex flex-row justify-center items-center bg-secondary rounded-full shadow-primary-glow p-2`}
                >
                  <BarChart2 className={`h-4 ${perfColor}`} />
                  <p className={`text-sm ${perfColor}`}>{performance}</p>
                </div>
              </div> */}
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
              <Progress value={33} className='w-full mb-2 h-3' />
              <Badge
                variant='outline'
                className='bg-gradient-to-b from-primary to-[#8028c3] text-white px-4 py-1'
              >
                {category}
              </Badge>
              <div className='flex flex-row items-center space-x-2'>
                <p className='text-sm'>Tokens by referral</p>
                <p className='font-bold text-lg'>{tokenEarned} FTX</p>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <p className='text-sm'>Price</p>
                <p className='font-bold text-lg'>
                  {formatCurrency(price as unknown as string)}
                </p>
              </div>
              <div className='absolute flex flex-col items-end top-10 right-6 w-full text-primary'>
                33%
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
