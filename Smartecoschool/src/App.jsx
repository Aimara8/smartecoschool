import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Cambia Switch por Routes
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Functionalities/Functions";
import Title from "./Components/Title/Title";
import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonials from "./Components/Use_Cases/Use_Cases";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import "./i18next"; // Importa la configuración de i18next
import Collaborators from "./Components/Collaborators/Collaborators";
import Goals from "./Components/Goals/Goals";
import { useTranslation } from "react-i18next";
import Sensores from "./Components/Sensores/Sensores";

function App() {
  const [playerState, setPlayerState] = useState(false);

  const { t } = useTranslation();

  return (
    <Router>
      <div>
        <Routes>
          {" "}
          {/* Cambia Switch por Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <div className="container">
                  <Goals setPlayerState={setPlayerState} />
                  <Title
                    subTitle={t("titles.subtitle1")}
                    title={t("titles.title1")}
                  />
                  <Testimonials />
                  <Title
                    subTitle={t("titles.subtitle2")}
                    title={t("titles.title2")}
                  />
                  <Programs />
                  <Title
                    subTitle={t("titles.subtitle3")}
                    title={t("titles.title3")}
                  />
                  <AboutUs setPlayerState={setPlayerState} />
                  <Title
                    subTitle={t("titles.subtitle4")}
                    title={t("titles.title4")}
                  />
                  <Collaborators />
                </div>
                <Footer />
                <VideoPlayer
                  playerState={playerState}
                  setPlayerState={setPlayerState}
                />
              </>
            }
          />
          <Route path="/sensores" element={<Sensores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
