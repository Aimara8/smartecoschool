import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import './i18next'; // Importa la configuración de i18next
import Collaborators from './Components/Collaborators/Collaborators'
import Base_de_datos from './Components/BaseDeDatos/Base_de_datos'

function App() {

  const [playerState, setPlayerState] = useState(false);

  return (
    <div>
      {/* <Navbar />
      <Hero />
      <div className='container'>
        <About setPlayerState={setPlayerState}/>
        <Title subTitle='Testimonials' title='What students say'/>
        <Testimonials/>
        <Title subTitle='Funcionalidades' title='¿Cómo funciona?'/>
        <Programs />
        <Title subTitle='Nosotros' title='Sobre Nosotros'/>
        <Campus/>
        <Title subTitle='Nuestros aliados' title='Colaboradores y Patrocinadores'/>
        <Collaborators/>
      </div>
      <Footer/>
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState}/> */}
      <Base_de_datos/>
    </div>
  )
}

export default App