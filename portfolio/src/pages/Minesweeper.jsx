import '../styles/Minesweeper.css';
import React from 'react';
import image1 from '../assets/minesweeper/gameIntro.png';
import image2 from '../assets/minesweeper/gameBoard.png';
import image3 from '../assets/minesweeper/bombsAndFlags.png';
import image4 from '../assets/minesweeper/boilerPlate.png';

function Minesweeper() {
  return (
    <main className="projects">
      <div className="parent-left">
        <h1>Projects</h1>
        <h2>Minesweeper</h2>
        <p>
         Very first project using HTML, CSS and JavaScript. 
         Problem solving and applicaton structure achieved by breaking the user jounrey 
         into applicaiton logic: 
         global variables, event listeners, event handlers and functions. Shock horror
         its not perfect and was a great learning opportunity.

        </p>
      </div>

      <div className="parent-right">
        <div className="image-container">
        
          <div className="two">
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Minesweeper;
