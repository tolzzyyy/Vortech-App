import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import VoteConfiguration from './Component/Vote Configuration'

const App = () => {
  return (
    <div>
      <VoteConfiguration/>


      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/register' exact element={<Register/>}></Route>
        <Route path='/login' exact element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App