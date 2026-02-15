import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-3 md:px-16 '>
     <h4 className='bg-black text-white uppercase text-center px-4 py-2 text-xs rounded-full md:px-6'>Target Audience</h4>
     <button className='bg-gray-200 px-4 py-2 md:px-6 uppercase rounded-full tracking-wider text-xs'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar


