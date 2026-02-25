import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contribution = () => {
  return (
    <div>
      <div className=' flex items-center justify-center gap-10 mt-2'>
        <Link className='bg-white text-black font-medium p-1 rounded text-lg' to='/contribution/jobs'>Jobs</Link>
        <Link className='bg-white text-black font-medium p-1 rounded text-lg' to='/contribution/nontech'>Non Tech</Link>
        <Link className='bg-white text-black font-medium p-1 rounded text-lg' to='/contribution/tech'>Tech</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Contribution
