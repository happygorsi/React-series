import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between bg-amber-600 text-black text- py-4 px-10'>
      <h1 className=' font-extrabold text-2xl text-shadow-lg leading-4 text-right'>DSHVG <br />Tech</h1>
      <div className=' flex gap-20 font-medium text-lg'>
        <Link to='/'>Home</Link>
        <Link to='/contribution'>Contribution</Link>
        <Link to='/techie'>Techie</Link>
        <Link to='/growth'>Growth</Link>
      </div>
    </div>
  )
}

export default Navbar
