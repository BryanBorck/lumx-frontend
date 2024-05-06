import bkg1 from '@/assets/cia_BKG.png'
import bkg2 from '@/assets/event2.jpg'
import bkg3 from '@/assets/event3.png'
import bkg4 from '@/assets/event4.png'
import bkg5 from '@/assets/event5.png'
import avatar from '@/assets/whale_avatar1.png'

export const userData = [
  {
    id: 1,
    name: 'Bry',
    email: 'brybry@gmail.com',
    instagram: 'brybry',
    password: '123456',
    avatar: avatar,
    balance: 1000,
    code: 'BRY24',
    location: 'São José dos Campos',
    pix: 'brybry@gmail.com',
    campaigns: [1, 2, 3, 4],
    tickets: [1, 3],
  },
]

export const eventData = [
  {
    id: 1,
    name: 'CIA',
    description:
      'CIA is the biggest universitary festival, 6 open bar parties and a competition.',
    image: bkg1,
    location: 'Uberaba - MG',
    instagram: 'cia',
    date: '31/05/2024',
    category: 'Festival',
    tokenSupply: '5000',
    tokenEarned: '500',
    tokenSpent: '800',
    price: '500',
  },
  {
    id: 2,
    name: 'Tusca',
    description:
      'Organized by the athletic association of UFSCar, this is the biggest universitary festival in the city of São Carlos.',
    image: bkg2,
    location: 'São Carlos - SP',
    instagram: 'tusca',
    date: '14/11/2024',
    category: 'Festival',
    tokenSupply: '5000',
    tokenEarned: '400',
    tokenSpent: '700',
    price: '400',
  },
  {
    id: 3,
    name: 'Universo Paralello',
    description:
      'Universo Paralello is a 7-day electronic music festival happening during new years even',
    image: bkg3,
    location: 'Pratigi Beach, Bahia',
    instagram: 'event',
    date: '27/12/2024',
    category: 'Festival',
    tokenSupply: '1000',
    tokenEarned: '200',
    tokenSpent: '300',
    price: '200',
  },
  {
    id: 4,
    name: 'D-Edge',
    description:
      'D-Edge is a multi cultural music club. D-Edge focuses on electronic parties, bringing world famous DJ.',
    image: bkg4,
    location: 'Barra Funda, São Paulo',
    instagram: 'event',
    date: '11/05/2024',
    category: 'Night Club',
    tokenSupply: '1000',
    tokenEarned: '150',
    tokenSpent: '250',
    price: '150',
  },
  {
    id: 5,
    name: 'Tomorrowland',
    description:
      'Counting with 400 artists from all kinds of electronic branches, Tomorrowland is the most diverse electronic music festival.',
    image: bkg5,
    location: 'Barra Funda, São Paulo',
    instagram: 'event',
    date: '19/07/2024',
    category: 'Festival',
    tokenSupply: '10000',
    tokenEarned: '1000',
    tokenSpent: '2000',
    price: '1000',
  },
]
