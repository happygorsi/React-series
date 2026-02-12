import React from "react";
import Card from "./components/card";

function App() {
  return (
     <div className="parent">
    <Card user='Happy Gorsi' age={22} img='https://plus.unsplash.com/premium_photo-1757914024397-8dfdb7756af1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    <Card user='Vansh Gorsi' age={20} img='https://plus.unsplash.com/premium_photo-1723428295291-d2abb18bc76c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    <Card user='Harshit Gorsi' age={24} img='https://images.unsplash.com/photo-1763987209766-d9bb8836c0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxMHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
    <Card user='Dev Gorsi' age={16} img='https://images.unsplash.com/photo-1756137074695-88e71b00ef77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1OHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
   </div>
  )
}

export default App;