import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../NavComponent/Home'
import Student from '../NavComponent/Student'
import ContactUs from '../NavComponent/ContactUs'
import EditStud from '../NavComponent/EditStud'
import AddStud from '../NavComponent/AddStud'
import './Routescomp.css'

const RoutesComp = () => {
  return (
    <>
    <BrowserRouter>
    <div className='Navbar'>
      <NavLink to='/' className='textlink' >Home</NavLink>
      <NavLink to='/student' className='textlink' >Student</NavLink>
      <NavLink to='/contactUs' className='textlink' >Contact Us</NavLink>
    </div>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={<Student/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/edit' element={<EditStud/>} />
        <Route path='/add' element={<AddStud/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RoutesComp