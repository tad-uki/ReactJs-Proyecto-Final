import React from 'react';
import "./Main.css"

const MainCarousel = ({titleImage}) => {

  return(
    <section className='mainDisplay'>
      <img src={titleImage}/>
      <span className='displayText'>
        <h2>Envíos al Delivery!</h2>
        <p>A partir de esta semana comenzamos a enviar nuestros productos por pedido via delivery! Ahora podés disfrutar las mejores cookies desde la comodidad de tu casa.
          Tené en cuenta que todavía contamos con nuestro servicio de Take-Away y con nuestros locales.
        </p>
      </span>

    </section>
  )
};

export default MainCarousel;