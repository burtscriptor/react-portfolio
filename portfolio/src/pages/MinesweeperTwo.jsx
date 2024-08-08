import {useState, useEffect} from 'react';
import '../styles/ProjectPage2.css';
import image1 from '../assets/minesweeper/recussion.png';
import image4 from '../assets/minesweeper/currentTile.png';
import image2 from '../assets/minesweeper/makeField.png';
import image3 from '../assets/minesweeper/initField.png';
import image5 from '../assets/minesweeper/won.png';

const images = [image1, image2, image3, image4, image5];

const MinesweeperTwo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <main className="m2-project">
      
      <div className="m2-upper">
        <h2>Fantastic things I learnt:</h2>

        <ul>
          <li>Code hygiene and dry coding</li>
          <li>Loops to create multiple
          DOM elements and attach event listeners</li>
          
          <li> Fundermentals of 
          DOM manipulation and responding to user events</li>
          
        </ul>
        <ul>
         
          <li>Recursion</li>
          <li>Using the spread operator</li>
          <li>HTML, CSS and JavaScript</li>
        </ul>
      
      

      </div>
      <div className="m2-lower">
        <div className="m2-image-container">
         
        <img src={images[index]} alt={`Slide ${index}`} />
          
        </div>
        <div className="m2-links">
        <a href="https://burtscriptor.github.io/project1-minesweeper/" className="button-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="https://github.com/burtscriptor/project1-minesweeper" className="button-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>

        
      </div>
    </main>
  );
};

export default MinesweeperTwo;
