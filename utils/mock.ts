import bkg from '@/assets/cia_BKG.png'
import event1 from '@/assets/cia_BKG.png'
import event2 from '@/assets/cia_BKG.png'
import event3 from '@/assets/cia_BKG.png'
import event4 from '@/assets/cia_BKG.png'

export const eventData = [
  {
    id: 1,
    name: 'CIA',
    description: 'The biggest universitary festival, 6 open bar parties and a competition with more than 5 sports and hundreds of universities',
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
    description: 'Organized by the athletic association of UFSCar, this is the biggest universitary festival in the city of São Carlos, reuniting the majority of the universities in São Paulo', 
    avatar: event2,
    image: bkg,
    location: 'São Carlos',
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
