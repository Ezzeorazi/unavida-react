import React from 'react'

export const Formulario = () => {
  return (
    <>
    <div  className="contact-form-container">
  <h2 id="contact">¿Te interesa lo que podemos ofrecerte?</h2>
  <button className="work-together-btn">trabajemos juntos</button>
  <form className="contact-form">
      <div className="form-group">
          <label htmlFor="name">Nombre y apellido</label>
          <input type="text" id="name" placeholder="Rellenar"/>
      </div>

      <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Rellenar"/>
      </div>

      <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" placeholder="Rellenar"/>
      </div>

      <div className="form-group">
          <label htmlFor="message">Contanos qué necesitás</label>
          <textarea id="message" placeholder="Rellenar"/>
      </div>

      <button type="submit" className="submit-btn">enviar</button>
  </form>
</div>

    
    
    
    </>
  )
}
