'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import Animation from '../assets/home_animation.json'

export function Test() {
  return (
    <div className='w-full overflow-hidden'>
      <Player src={Animation} className='player w-48 h-48' loop autoplay />
    </div>
  )
}
