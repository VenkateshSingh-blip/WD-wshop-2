import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'
import Greeting from './components/Greeting'
import Name from './components/Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting/>
      <Student name={'Rahul Sharma'} course={'Computer Science'} marks={85}/><br/>
      <Student name={'Anita Verma'} course={'Information Technology'} marks={92}/><br/>
      <Student name={'Rohan Gupta'} course={'Electronics'} marks={78}/><br/>
      <Name/>
    </>
  )
}

export default App
