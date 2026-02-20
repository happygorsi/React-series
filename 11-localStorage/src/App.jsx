
function App() {
//  set item is used for add data i local storage
  localStorage.setItem('user','Happy Gorsi')
  localStorage.setItem('age','22')


  // get item is used for getting data from local storage
  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')
  console.log(user,age);
  
  // remove item is used for remove data from local storage
  localStorage.removeItem('user')

  // clear is used for clear all data from local storage
  localStorage.clear()


  // JSON.stringify and JSON.parse is used for add data in local storage when data is in object or array of object
   const arr = [{
    name:'Happy Gorsi',
    age:22,
    city:'Gurgaon'
  },
  {
    name:'Vansh Gorsi',
    age:20,
    city:'Gurgaon'
  }
]

  localStorage.setItem('user', JSON.stringify(arr))
  
  
 const lala = JSON.parse(localStorage.getItem('user'))
 console.log(lala);
 

  return (
    <>
    <div>app</div>
    </>
  )
}

export default App
