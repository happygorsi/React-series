import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {
   try {
     const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)

    setUserData(response.data)
   }
    catch (error) {
    console.log(error);
    
   }

  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx} className='flex flex-col gap-2'>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 rounded-xl'>
            <img className='h-full w-full object-cover overflow-hidden' src={elem.download_url} alt="" />
          </div>
          <h2 className='text-center font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 ml-20 py-2'>
        {printUserData}
      </div>
      <div className=' flex justify-center items-end p-4 gap-6'>
        <button
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>

        <button
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
        >
          Next

        </button>
      </div>
    </div>
  )
}

export default App
