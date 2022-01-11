import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2018</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2010-2014</h3>
            <p>2010-2014
esta empresa fue creada por un joven mexicano que crecio en la cierra rodeado de la natraleza, la cual lo a inspirado para el cuidado de la misma, a la corta edad de 13 años comenzo a cuidar de la naturaleza y los animales de ahi nace la idea de crear una forma para el cuidado y la conservacion de la naturaleza.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
