import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate(); // Hook para usar navigate

  const toggleMenu = (e) => { 
      e.preventDefault();  
      const menu = document.getElementById("sideMenu");
      menu.style.width = menu.style.width === '250px' ? '0px' : '250px';
  };

  const scrollToContact = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto si estás usando un <a> con href

    // Cierra el menú si está abierto
    const menu = document.getElementById("sideMenu");
    if (menu && menu.style.width === '250px') {
        menu.style.width = '0px';
    }

    // Obtén la sección de contacto y desplázate hacia ella
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
   
   <div className="navbar">
       
        <NavLink to="/" className="logo">
            <img src="/images/logo header.png" alt="" />
        </NavLink>
          <span className="hamburger-icon" onClick={toggleMenu}><p>☰</p></span>
         
       
      
      {/* Menú lateral que se abre desde la derecha */}
       <div className="side-menu" id="sideMenu">
       <NavLink to="#" className="closebtn" onClick={toggleMenu} >x</NavLink>

          <NavLink  className={({ isActive }) => isActive ? "side-menu__button active" : "side-menu__button"} to="/nosotros" >Nosotros</NavLink>
           <NavLink  className={({ isActive }) => isActive ? "side-menu__button active" : "side-menu__button"} to="/quehacemos" >¿Qué hacemos?</NavLink>
          <NavLink  className={({ isActive }) => isActive ? "side-menu__button active" : "side-menu__button"} onClick={scrollToContact}>Contáctanos</NavLink> 

        <div className="social-media-icons">
          <Link to="#">
            <img src="/images/logo fb.png" alt="logo-facebook"/>
          </Link>
          <Link to="#">
            <img src="/images/logo instagram.png" alt="logo-instagram"/>
          </Link>
          <Link to="#">
            <img src="/images/logo linkedin.png" alt="logo-linkedin"/>
          </Link>
          <Link to="#">
            <img src="/images/logo gmail.png" alt="logo-gmail" style={{ height: '14px' }}/>
          </Link>
          <Link to="#">
            <img src="/images/logo wsp.png" alt="logo-whatsapp"/>
          </Link>
        </div>
    </div> 
    </div>

  )
}
