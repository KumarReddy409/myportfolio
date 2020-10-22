import React from 'react';
import Header from './components/navbar-component/Header';
import Carousel from './components/carousal-component/Carousel';
import TitleMessage from './components/title-component/TitleMessage';
import scrolldown from './components/scroll-down/scrolldown'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Carousel/>
     <TitleMessage/>
      </header>
    </div>
  );
}

export default App;
