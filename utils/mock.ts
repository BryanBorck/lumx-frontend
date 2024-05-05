import bkg from '@/assets/cia_BKG.png'
import event1 from '@/assets/cia_BKG.png'
import event2 from '@/assets/cia_BKG.png'
import event3 from '@/assets/cia_BKG.png'
import event4 from '@/assets/cia_BKG.png'

export const userData = [
  {
    id: 1,
    name: 'Bry',
    email: 'brybry@gmail.com',
    instagram: 'brybry',
    password: '123456',
    avatar: event1,
    code: 'BRY24',
    location: 'São José dos Campos',
    pix: 'brybry@gmail.com',
    campaigns: [1, 2, 3, 4],
    tickets: [1, 2, 3, 4],
  },
]

export const eventData = [
  {
    id: 1,
    name: 'CIA',
    description: 'conservative fund',
    avatar: event1,
    image: bkg,
    location: 'Uberaba',
    trend: 'Low',
    comission: '10',
    performance: '+10%',
  },
  {
    id: 2,
    name: 'Tusca',
    description: 'high trend fund',
    avatar: event2,
    image: bkg,
    location: 'Uberaba',
    trend: 'High',
    comission: '10',
    performance: '+20%',
  },
  {
    id: 3,
    name: 'Event 3',
    description: 'random',
    avatar: event3,
    image: bkg,
    location: 'Uberaba',
    trend: 'Low',
    comission: '10',
    performance: '-10%',
  },
  {
    id: 4,
    name: 'Event 4',
    description: 'SOL ETF',
    avatar: event4,
    image: bkg,
    location: 'Uberaba',
    trend: 'Medium',
    comission: '10',
    performance: '+5%',
  },
]
