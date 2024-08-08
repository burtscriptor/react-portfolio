import React, {useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Minesweeper from './pages/Minesweeper';
import MinesweeperTwo from './pages/MinesweeperTwo';
import SpaceStationLocator from './pages/SpaceStationLocator';
import SpaceStationLocatorTwo from './pages/SpaceStationLocatorTwo';
import MyStory from './pages/MyStory';
import Transition from './pages/Transition';
import Community from './pages/Community';
import Community2 from './pages/Community2';
import ImageSlider from './components/ImageSlider';
import Transition2 from './pages/Transition2';
import Transition3 from './pages/Transition3';
import Investment from './pages/Investment';
import './App.css';


function App() {
  const [landing, setLanding] = useState(false)

 
  const mainApp = () =>{
    setLanding(true)
  }

  return (
    <div className="App">
     {/* {!landing ? <LandingPage mainApp={mainApp}/> : <AboutMe /> } */}
    
     <AboutMe />
     <Minesweeper />
     {/* <MinesweeperTwo />
     <SpaceStationLocator />
     <SpaceStationLocatorTwo />
     <Community />
     <Community2 /> */}
     <MyStory />
     <Transition /> 
     <Transition2 />
     <Transition3 />
     <Investment />
     
   
    </div>
  );
};

export default App;
