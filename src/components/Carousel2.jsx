import React from 'react'

export const Carousel2 = () => {
  return (
    <>
    <div className="carousel-container">

<div className="carousel-slide">
  <div className="carousel-item active">
    <img src="images/unavidatech-equipo-trabajo-digital.jpg" alt="Image 1"/>
  </div>
  <div className="carousel-item">
    <img src="images/unavidatech-transformacion-digital-tecnologia.jpg" alt="Image 2"/>
  </div>
  <div className="carousel-item">
    <img src="images/unavidatech-transformacion-digital.jpg" alt="Image 3"/>
  </div>
</div>
<div className="carousel-text">
  <h2>Formá parte de nuestro equipo.</h2>
  <button href="#">enviar mi cv</button>
</div>

</div>

<h2 className="carousel-text2">Soluciones tecnológicas para empresas.</h2>
<div className="linea-flecha-arriba">
<hr className="linea-media" />
<div className="flecha-arriba">
  <img src="/images/flecha inferior.png" alt=""/>
</div>
</div>
    
    </>
  )
}
