import React from 'react'
import { useParams } from 'react-router-dom'

const GrowthDetails = () => {

    const params = useParams()
    
  return (
    <div>
         <h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-amber-600 bg-amber-100 p-1 rounded '>{params.id} Growth Details</h2>
    </div>
  )
}

export default GrowthDetails
