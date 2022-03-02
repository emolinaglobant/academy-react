import React from 'react'

export const SidebarLeft = () => {
  return (
    <aside className='trivia__sidebar-left'>
        <h2>Nivel Dificultad</h2>
        <section className="trivia__difficulty">
          <button type="button" data-level="easy" className="btn btn__warning mr-3 ml-3">Baja</button>
          <button type="button" data-level="medium" className="btn btn__success mr-3">Media</button>
          <button type="button" data-level="hard" className="btn btn__danger mr-3">Alta</button>
        </section>

        <section className="trivia__categories">
          <h3>Categorías</h3>
          <button type="button" className="btn btn__outline-dark mt-3 mr-3" id="btn-check-celebrities" data-category="Celebrities" data-numero="26">Celebridades</button>
          <button type="button" className="btn btn__outline-dark mt-3 mr-3" id="btn-check-historia" data-category="History" data-numero="23">Historia</button>
          <button type="button" className="btn btn__outline-dark mt-3 mr-3" id="btn-check-deporte" data-category="Sports" data-numero="21">Deporte</button>
          <button type="button" className="btn btn__outline-dark mt-3 mr-3" id="btn-check-animales" data-category="Animals" data-numero="27">Animales</button>
          <button type="button" className="btn btn__outline-dark mt-3 mr-3" id="btn-check-geo" data-category="Geography" data-numero="22">Geografía</button>
        </section>
    </aside>
  )
}