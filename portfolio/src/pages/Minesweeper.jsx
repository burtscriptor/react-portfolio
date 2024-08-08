import '../styles/ProjectPage1.css';
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
         First project with HTML, CSS and JavaScript. 
         Problem solving and applicaton structure achieved by breaking the user jounrey 
         into sections: 
         global variables, event listeners, event handlers and functions.

        </p>
      </div>

      <div className="parent-right">
        <div className="image-container">
            <img src={image3} />
        </div>
      </div>
    </main>
  );
}

export default Minesweeper;
