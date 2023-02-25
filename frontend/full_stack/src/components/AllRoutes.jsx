import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Contact from './Contact'
import Product from './Product'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
    </Routes>
  )
}

export default AllRoutes