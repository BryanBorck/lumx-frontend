import { StaticImageData } from 'next/image'

export type eventType = {
  id: number
  name: string
  description: string
  avatar: StaticImageData
  image: StaticImageData
  location: string
  trend: string
  comission: string
  performance: string
}
