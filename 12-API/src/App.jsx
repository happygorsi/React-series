import React from 'react'
import { useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])

  async function jaadoo() {
    try {
    const response = await fetch('https://dummyjson.com/users')

    if (!response.ok) {
          throw new Error("Something went wrong");
        }

    const data = await response.json()
    setUsers(data.users);
    
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div>
      <button
      onClick={jaadoo}
      >click</button>

      <div>
      <h1>Users List</h1>

      {
        users.map((elem) => (
          <h3 key={elem.id}>
            {elem.firstName} {elem.lastName} {elem.id}
          </h3>
        ))
      }

    </div>



    </div>
  )
}

export default App

