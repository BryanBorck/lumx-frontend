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
  avatar,
  image,
  location,
  trend,
  comission,
  performance,
  loading,
}: {
  id: number
  name: string
  description: string
  avatar: StaticImageData
  image: StaticImageData
  location: string
  trend: string
  comission: string
  performance: string
  loading: boolean
}) {
  const perfColor = performance.includes('+')
    ? 'text-green-600'
    : 'text-red-600'
  const trendBkgColor =
    trend === 'Low'
      ? 'from-green-400'
      : trend === 'Medium'
      ? 'from-yellow-400'
      : 'from-red-400'
  const trendColor =
    trend === 'Low'
      ? 'text-green-400'
      : trend === 'Medium'
      ? 'text-yellow-400'
      : 'text-red-400'

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
                <Image
                  src={avatar}
                  alt=''
                  className='w-[15%] border-[2px] rounded-full border-primary shadow-primary-glow'
                />
                <div className='px-4'>
                  <p className='text-white font-bold text-lg'>{name}</p>
                  <p className='text-white font-thin text-sm'>{location}</p>
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
                className={`absolute w-full -bottom-10 h-24 opacity-50 bg-gradient-to-t ${trendBkgColor} to-transparent`}
              />
            </div>
            <div className='aspect-[2/1] p-4 space-y-4 py-6 relative'>
              <Badge
                variant='outline'
                className='bg-gradient-to-b from-primary to-[#8028c3] text-white px-4 py-1'
              >
                Festival
              </Badge>
              {/* <div className='flex flex-row items-center space-x-2'>
                <Gauge className={`${trendColor} w-6 h-6`} />
                <p className={`${trendColor}`}>{trend}</p>
              </div> */}
              <div className='flex flex-row items-end space-x-2'>
                <p>Comission</p>
                <p className='font-bold text-xl'>{comission}%</p>
              </div>
              <div className='flex flex-row items-end space-x-2'>
                <p>Price</p>
                <p className='font-bold text-xl'>${comission}</p>
              </div>
              <div className='absolute flex flex-col items-end top-0 right-6 w-full'></div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
