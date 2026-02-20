import React, { useState } from 'react'

const App = () => {

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title,detail})
  
    setTask(copyTask)

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const delTask = [...task]

    delTask.splice(idx,1)

    setTask(delTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className=' flex lg:w-1/2 flex-col p-10 gap-4'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* first input for heading */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 font-medium w-full py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }
          }
        />

        {/* input for detail */}
        <textarea
          type="text"
          placeholder='Enter Details'
          className='px-5 f  ont-medium w-full h-32 py-2 border-2 outline-none rounded'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />

        <button 
        className='bg-white active:scale-95 font-medium text-black w-full px-5 py-2 outline-none rounded'
        >
        Add Notes
        </button>

      </form>
      <div className=' p-7 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5  overflow-auto'>
          {task.map(function(elem, idx){

            return <div key={idx} className=' flex justify-between flex-col items-start relative h-52 w-40  rounded-xl text-black px-4 py-8 pb-5 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowHB9R1s1x97nUewNlxi06KaDAyUFvjG8dA&s)] '>
              <div>
                <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.detail}</p>
              </div>
              <button
              onClick={() => {
                deleteNote(idx)
              }}
              className='w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-sm rounded'>Delete</button>
            </div>           
          })}
        </div>
      </div>
    </div> 
  )
}

export default App
