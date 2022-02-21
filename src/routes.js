import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contact } from './Components/Pages/Contact/Contact'
import { Home } from './Components/Pages/Home/Home'
import { Login } from './Components/Pages/Login/Login'
import { Panel } from './Components/Pages/Panel/Panel'
import { Register } from './Components/Pages/Register/Register'

export const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/panel' element={<Panel/>} />
            <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}
