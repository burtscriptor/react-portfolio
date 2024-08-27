import '../styles/SpaceTwo.css'
import icon1 from '../assets/story/web-design.png';
import icon2 from '../assets/story/web-development.png';
import icon3 from '../assets/story/computer.png';

const MineTwoTwo = () => {
    return (
        <main className="spaceTwo">
            <div className="spaceTwoHeader">
            <h2>Learning opportunities</h2>
            </div>
            <div className="spaceTwoContent">
            
                <div className="spaceTwoBox frontend">
                <div className="icon-container">
                    <img src={icon1} alt="frontend icon" />
                </div>
                <h3>The DOM</h3>
                    <p>A programming interface for web documents 
                        that represents the structure of a webpage.
                    </p>
                    <p>Manipulating the DOM allows for interactive and responsive web experiencs. </p>
                   
                </div>

                <div className="spaceTwoBox ">
               
                <div className="icon-container">
                    <img src={icon1} alt="frontend icon" />
                </div>
                <h3>Practical</h3>
                    <p>  Code hygiene and applying the principles of dry coding.</p>
                    <p> Using loops to create arrays of HTML elements and attach
                        event listeners.
                    </p>
                    
                </div>

                <div className="spaceTwoBox fullstack">
                <div className="icon-container">
                <img src={icon3} alt="fullstack icon" />
                    </div>
                    <h3>What I enjoyed</h3>
                    <p>Working with a 2d array to represent the gameboard and its state.</p>
                    <p>The thrilling of making something interactive.</p>
                    
                </div>


            </div>
        </main>
    );
};

export default MineTwoTwo;