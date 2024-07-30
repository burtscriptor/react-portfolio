import React, {useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Minesweeper from './pages/Minesweeper';
import MinesweeperTwo from './pages/MinesweeperTwo';
import SpaceStationLocator from './pages/SpaceStationLocator';
import SpaceStationLocatorTwo from './pages/SpaceStationLocatorTwo';
import MyStory from './pages/MyStory';
import Project3 from './pages/Project3';
import './App.css';


function App() {
  const [landing, setLanding] = useState(false)

 
  const mainApp = () =>{
    setLanding(true)
  }

  return (
    <div className="App">
     {/* {!landing ? <LandingPage mainApp={mainApp}/> : <AboutMe /> } */}
    
     {/* <AboutMe />
     <Minesweeper />
     <MinesweeperTwo />
     <SpaceStationLocator />
     <SpaceStationLocatorTwo /> */}
     <MyStory />
     {/* <Project3 /> */}
     
     
    </div>
  );
};

export default App;
