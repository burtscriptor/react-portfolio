import React, {useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Minesweeper from './pages/Minesweeper';
import MinesweeperTwo from './pages/MinesweeperTwo';
import MyStory from './pages/MyStory';
import Transition from './pages/Transition';
import Community from './pages/Community';
import Community2 from './pages/Community2';
import Transition2 from './pages/Transition2';
import Transition3 from './pages/Transition3';
import Investment from './pages/Investment';
import Skills from './pages/Skills'
import TechSkills from './pages/TechSkills';
import Navbar from './components/NavBar';
import SpaceTwo from './pages/Space2';
import ComTwo from './pages/Com2';
import MyServices from './pages/MyServices';
import SpaceOne from './pages/SpaceOne';
import MineOne from './pages/MineOne';
import './App.css';


function App() {
  const [landing, setLanding] = useState(false)

 
  const mainApp = () =>{
    setLanding(true)
  }

  return (
    <div className="App">
     {/* {!landing ? <LandingPage mainApp={mainApp}/> : <AboutMe /> } */}

     {/* <AboutMe /> */}
     {/* <Navbar /> */}
     <SpaceOne />
     <SpaceTwo />
     {/* <Minesweeper /> */}
     <MineOne />
     <MinesweeperTwo />
  
     
   
     {/* <Community /> */}
     {/* <Community2 /> */}
     {/* <ComTwo />
     <MyStory /> */}

     {/* <Transition /> 
     <Transition2 />
     <Transition3 /> */}

     {/* <Skills />
     <Investment />
     <MyServices />
     <TechSkills />
      */}
   
    </div>
  );
};

export default App;
