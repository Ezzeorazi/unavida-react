import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { Formulario} from '../components/Formulario'

export const LayoutPublic = () => {
  return (
    <>
    <Navbar/>
    
    
    <Outlet/>
    <Formulario/>
    <Footer/>
    </>
  )
}
