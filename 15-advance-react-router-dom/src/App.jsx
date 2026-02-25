import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contribution from './pages/Contribution'
import Techie from './pages/Techie'
import Notfound from './pages/Notfound'
import Jobs from './pages/Jobs'
import NonTech from './pages/NonTech'
import Tech from './pages/Tech'
import Growth from './pages/Growth'
import GrowthDetails from './pages/GrowthDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className=' h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contribution' element={<Contribution />}> 
        <Route path='jobs' element={<Jobs />} />
        <Route path='nontech' element={<NonTech />} />
        <Route path='tech' element={<Tech />} />
        </Route>
        <Route path='/Techie' element={<Techie />} />
        <Route path='/growth' element={<Growth />} />
        <Route path='/growth/:id' element={<GrowthDetails />}/>
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
