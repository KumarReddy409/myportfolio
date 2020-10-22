import React from 'react';
import Header from './components/navbar-component/Header';
import Carousel from './components/carousal-component/Carousel';
import TitleMessage from './components/title-component/TitleMessage';
import About from './pages/about-component/about';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

import './App.css';

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <header className="App-header">
      <Header/>
      <Carousel/>
     <TitleMessage/>
     <div>
     <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
           
     </div>
     </Parallax>
      </div>
      </header>
    </div>
  );
}

export default App;
