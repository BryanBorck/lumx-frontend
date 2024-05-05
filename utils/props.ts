import { StaticImageData } from 'next/image'

export type userType = {
  id: number
  name: string
  email: string
  instagram: string
  password: string
  avatar: StaticImageData
  balance: number
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
  image: StaticImageData
  location: string
  instagram: string
  date: string
  category: string
  tokenSupply: string
  tokenEarned: string
  tokenSpent: string
  price: string
}
