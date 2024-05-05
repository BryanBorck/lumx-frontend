import { StaticImageData } from 'next/image'

export type userType = {
  id: number
  name: string
  email: string
  instagram: string
  password: string
  avatar: StaticImageData
  code: string
  location: string
  pix: string
  campaigns: number[]
  tickets: number[]
}

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
