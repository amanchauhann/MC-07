import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Countries from './Pages/Countries'
import Destinations from './Pages/Destinations'
import Detailed from './Pages/Detailed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Countries />} path='/:continents' />
        <Route element={<Destinations />} path='/country/:countries' />
        <Route element={<Detailed />} path='/destination/:detailed' />


      </Routes>
    </>
  )
}

export default App
