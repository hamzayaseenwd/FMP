import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/Home'
import About from '../../screens/About'
import Contact from '../../screens/Contact'
import Service from '../../screens/Service'
import Navbar from '../../components/Navbar'
import  Product  from '../../screens/Product'
import { Login } from '../../screens/Login'
import { Signup } from '../../screens/Signup'

const Routerconfig = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='service' element={<Service/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='product/:id' element={<Product/>}/>
            </Routes>

            
        </BrowserRouter>
    )
}

export default Routerconfig