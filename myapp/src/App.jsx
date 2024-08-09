import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Statebasic from './components/Statebasic'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup2 from './components/Signup2'
import Api from './components/Api'


function App() {
  
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup2/>} />
        <Route path='/l'element={<Login />} />
        <Route path='sb' element={<Statebasic />} />
        <Route path='/wl' element={<Welcome />} />
        <Route path='/a' element={<Api />} />
        </Routes>
      
    </>
  )
}

export default App
