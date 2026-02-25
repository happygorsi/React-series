import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {
    

     const navigate = useNavigate()

  return (
    <div className='bg-amber-500 w-full text-center'>
      <button 
      onClick={() =>{
        navigate(-1)
      }}
      className='bg-amber-600 font-medium px-4 py-1.5 rounded m-2 cursor-pointer active:scale-95 '>
      Back
      </button>

      <button 
      onClick={() =>{
        navigate('/')
      }}
      className='bg-amber-600 font-medium px-4 py-1.5 rounded m-2 cursor-pointer active:scale-95 '>
      Return to Home Page
      </button>
      <button 
      onClick={() =>{
        navigate(+1)
      }}
      className='bg-amber-600 font-medium px-4 py-1.5 rounded m-2 cursor-pointer active:scale-95 '>
      Next
      </button>
    </div>
  )
}

export default Navbar2
