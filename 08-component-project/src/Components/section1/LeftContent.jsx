import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'


const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between px-2 w-1/3'>
      <HeroText />
      <Arrow />
      
    </div>
  )
}

export default LeftContent
