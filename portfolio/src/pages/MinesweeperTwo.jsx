import '../styles/MinesweeperTwo.css';
import image1 from '../assets/minesweeper/recussion.png';
import image4 from '../assets/minesweeper/currentTile.png';
import image2 from '../assets/minesweeper/makeField.png';
import image3 from '../assets/minesweeper/initField.png';
import image5 from '../assets/minesweeper/won.png';

const MinesweeperTwo = () => {
  return (
    <main className="m2-project">
      <div className="m2-parent-left">
        <h2>Fantastic way to learn:</h2>
        <p>
       Code hygiene and dry coding, using loops to create multiple clones of 
        DOM elements and attach event listeners. Implemented the concept of recursion to 
        simplify the 'flood effect', it took me sometime to figure it out. Fundermentals of 
        DOM manipulation and responding to user events, HTML, CSS and JS. Also a good introduction to the spread operator.

        </p>
      </div>

      <div className="m2-parent-right">
        <div className="m2-image-container">
          <div className="m2-one"></div>
          
          <div className="m2-two">
            <img src={image3} />
          </div>
          
          <div className="m2-three">
            <img src={image1} />
            <div className="m2-links">
              <span>
                <a href="https://burtscriptor.github.io/project1-minesweeper/">
                  <p>Play</p>
                </a>
              </span>
              <span>
                <a href="https://github.com/burtscriptor/project1-minesweeper/blob/main/js/main.js">
                  <p>Code</p>
                </a>
              </span>
              <span>
                <a href="https://burtscriptor.github.io/project1-minesweeper/">
                  <p>Comment</p>
                </a>
              </span>
            </div>
          </div>

          <div className="m2-four">
            <img src={image4} />
            <img src={image5} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MinesweeperTwo;
