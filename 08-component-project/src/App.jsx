import React from 'react'
import Section1 from './Components/section1/Section1'
import Section2 from './Components/section2/Section2'
import { LeafyGreen } from 'lucide-react'

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Satisfied',
      color:'green'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underserved',
      color:'cyan'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underbanked',
      color:'pink'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underdog',
      color:'orange'
    },
    {
      img:'https://images.unsplash.com/photo-1598221860328-ced5e9b38c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Modern',
      color:'magenta'
    }
  ]

  return (
    <div>
    <Section1 users={users} />
    <Section2 />
    </div>
  )
}

export default App
