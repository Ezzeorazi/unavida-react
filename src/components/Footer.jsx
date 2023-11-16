import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-superior">
    <Link to="mailto:infoconsulta@unavida.tech">infoconsulta@unavida.tech</Link>
    <p>Argentina. Colombia.</p>
  </div>
  <div className="footer-inferior">
    <span></span>
    
    <p><img className="logo-footer" src="/images/logo corto footer.png" alt=""/>Copyright unavida.tech 2023. All rights reserved.</p>

    <div className="social-media-icons-footer">
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
        <img src="/images/logo gmail.png" alt="logo-gmail"/>
      </Link>
      <Link to="#">
        <img src="/images/logo wsp.png" alt="logo-whatsapp"/>
      </Link>
    </div>
    <div className="span2"></div>
  </div>
</footer>
  )
}
