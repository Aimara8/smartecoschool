import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambia Switch por Routes
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import AboutUs from './Components/AboutUs/AboutUs'
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import './i18next'; // Importa la configuración de i18next
import Collaborators from './Components/Collaborators/Collaborators';
import Base_de_datos from './Components/BaseDeDatos/Base_de_datos';
import About from './Components/About/About'

function App() {
  const [playerState, setPlayerState] = useState(false);

  return (
    <Router>
      <div>
        <Routes> {/* Cambia Switch por Routes */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <div className='container'>
                <About></About>
                <Title subTitle='Entornos reales' title='Casos de Uso' />
                <Testimonials />
                <Title subTitle='Funcionalidades' title='¿Cómo funciona?' />
                <Programs />
                <Title subTitle='Nosotros' title='Sobre Nosotros' />
                <AboutUs setPlayerState={setPlayerState} />
                <Title subTitle='Nuestros aliados' title='Colaboradores y Patrocinadores' />
                <Collaborators />
              </div>
              <Footer />
              <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
            </>
          } />
          <Route path="/base-de-datos" element={<Base_de_datos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;