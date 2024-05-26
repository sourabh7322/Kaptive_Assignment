import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './Components/SideBar'
import NavBar from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SideBar></SideBar>
     <NavBar></NavBar>
    </>
  )
}

export default App
