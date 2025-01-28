import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/trabajando1.jpg';
import gallery_2 from '../../assets/trabajando2.jpg';
import gallery_3 from '../../assets/trabajando3.jpg';
import gallery_4 from '../../assets/trabajando4.jpg';

const Campus = () => {
  const data = [
    { img: gallery_1, text: (
      <>
      <p>¡Bienvenido a nuestro espacio digital!</p><br />
      <p>Somos un grupo de estudiantes del Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma, unidos por la determinación de hacer la diferencia.</p><br />  
      <p>En el corazón de nuestro trabajo se encuentra un proyecto innovador que refleja nuestras habilidades técnicas y nuestra dedicación a crear un impacto positivo en el mundo que nos rodea.</p>
      </>
      )},
    { img: gallery_2, text: (
      <>
      <h4>Lo que nos define</h4><br />
      <p>En nuestro grupo, no solo trabajamos juntos, sino que creamos un ambiente donde la colaboración florece.</p><br />
      <p>La diversidad de habilidades y perspectivas dentro de nuestro equipo es lo que nos hace fuertes. Por ejemplo, algunos de nosotros aportamos mentes analíticas, mientras que otros contribuyen con creatividad e innovación.</p><br />  
      <p>Más allá de nuestras habilidades técnicas, compartimos valores fundamentales: respeto, empatía y un deseo genuino de marcar la diferencia.</p>
      </>
      )},
    { img: gallery_3, text: (
      <>
      <h4>El Toque Personal</h4><br />
      <p>Detrás de cada línea de código y cada reunión de equipo, hay una historia. La nuestra es la historia de un grupo de individuos decididos a dejar una huella positiva en el mundo.</p><br />
      <p>Nos esforzamos por llevar nuestra humanidad al proyecto, recordando que cada acción cuenta. Por ejemplo, colaboramos activamente con iniciativas locales para garantizar que nuestras soluciones sean inclusivas y sostenibles.</p><br />  
      <p>No solo queremos mejorar el rendimiento económico, sino también contribuir a la salud de nuestro planeta. Creemos firmemente que el progreso tecnológico debe ir de la mano con la responsabilidad ambiental.</p>
      </>
      )},
    { img: gallery_4, text: (
      <>
      <h4>Mirando al Futuro</h4><br />
      <p>Con cada paso que damos, miramos hacia un futuro lleno de posibilidades. Sabemos que los desafíos son inevitables, pero estamos listos para enfrentarlos con determinación.</p><br />
      <p>Estamos emocionados por lo que está por venir y comprometidos a seguir aprendiendo, creciendo y marcando la diferencia en cada oportunidad que tengamos.</p>  
      <p>Gracias por ser parte de este viaje con nosotros.</p>
      </>
      )},
  ];

  return (
    <div className="campus">
      {data.map((item, index) => (
        <div
          className={`section ${index % 2 === 0 ? 'normal' : 'reverse'}`}
          key={index}
        >
          <img src={item.img} alt={`Imagen ${index + 1}`} className="gallery-img" />
          <div className="gallery-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Campus;
