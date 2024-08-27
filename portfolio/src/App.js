import React, {useState, useEffect } from 'react';
import Investment from './pages/Investment';
import Skills from './pages/Skills'
import TechSkills from './pages/TechSkills';
import Navbar from './components/NavBar';
import SpaceTwo from './pages/Space2';
import MyServices from './pages/MyServices';
import SpaceOne from './pages/SpaceOne';
import MyStory from './pages/MyStory';
import Home from './pages/Home';
import Com from './pages/Com';
import Dose from './pages/Dose';
import DoseTwo from './pages/DoseTwo';
import ComOne from './pages/ComOne';
import Dine from './pages/IDine';
import IDineTwo from './pages/IDineTwo';
import MyStoryTwo from './pages/MyStoryTwo';
import Contact from './pages/ContactMe';
import './App.css';


function App() {
  const [landing, setLanding] = useState(false)

 
  const mainApp = () =>{
    setLanding(true)
  }

  return (
    <div className="App">
     {/* {!landing ? <LandingPage mainApp={mainApp}/> : <AboutMe /> } */}



    <Home />
     {/* <Navbar /> */}
     <Dose />
     <DoseTwo />

     <Dine />
     <IDineTwo />

     <SpaceOne />
     <SpaceTwo />

     <ComOne />
     <Com />

     <Contact />

      {/* <MyStory /> */}
      {/* <MyStoryTwo /> */}
      {/* <Skills />

     <Investment />
     
      <TechSkills />
      <MyServices />
       */}
   
    </div>
  );
};

export default App;
