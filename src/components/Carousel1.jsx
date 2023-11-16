import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

export const Carousel1 = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const totalSlides = 3; // Asumiendo que tienes 3 diapositivas

    useEffect(() => {
        const nextSlide = () => {
            setSlideIndex((current) => (current + 1) % totalSlides);
        };

        const intervalId = setInterval(nextSlide, 10000); // Cambia cada 10 segundos

        return () => clearInterval(intervalId); // Limpieza al desmontar
    }, [totalSlides]);

  return (
    <>
    <div className="carrusel">
    <div className={`slides fade ${slideIndex === 0 ? 'show' : ''}`}>
      <img src="/images/1.png" alt=""/>
    <div className="text">Somos una start up <span>nativa digital.</span>
                                             

    <span className="cursor">|</span>
  </div>
  </div>
  <div className={`slides fade ${slideIndex === 1 ? 'show' : ''}`}>
            <img src="/images/2.png" alt=""/>
        <div className="text">Generamos ventajas competitivas aplicando tecnología a tus procesos. <br/>
          <p className="text1-carrousel">Transformación digital</p>
        </div>
      </div>   
      <div className={`slides fade ${slideIndex === 2 ? 'show' : ''}`}>
      <img src="/images/3.png" alt=""/>
      <div className="text" style={{color:"#2A3336"}}>Transformamos digitalmente tu empresa. <br/>
      <p className="text3-carrousel">Transformación digital</p>
              
      </div>
    </div>
      <NavLink to="/" className="learn-more-btn">conocé más</NavLink>
  </div>

  <section className="flecha">
  <img src="/images/flecha superior.png" alt=""/>
</section>
<div className="flecha-text">
  <h3>software</h3>
  <img src="/images/iconos-blanco/favicon-32x32.png" alt=""/>
  <h3>transformación</h3>
  <img src="/images/iconos-blanco/favicon-32x32.png" alt=""/>
  <h3>crecimiento</h3>
</div>


</>
  )
}
