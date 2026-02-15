import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-15 pt-5 flex gap-5 items-center px-5 h-[90vh] md:px-18 md:gap-10 '>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
