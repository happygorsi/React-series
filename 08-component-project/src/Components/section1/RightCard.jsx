import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
    return (
        <div className=' h-full shrink-0 w-65 overflow-hidden relative bg-red-500 rounded-4xl'>
            <img className=' h-full w-full object-cover' src={props.img} alt="" />
          <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
        </div>
    )
}

export default RightCard
