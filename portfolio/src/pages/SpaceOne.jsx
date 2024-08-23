import React, {useState, useEffect } from 'react';
import '../styles/SpaceOne.css';
import image1 from '../assets/iss/opening.png';
import image2 from '../assets/iss/fullscreen.png';
import image3 from '../assets/iss/listNames.png';
import icon1 from '../assets/icons/github.png';
import icon2 from '../assets/icons/play-button.png';

const images = [image1]

const SpaceOne = () => {
    const [index, setIndex] = useState(0);

    useEffect(()=> {
        const timer = setInterval(() => {
            setIndex((prev) => (prev +1) % images.length); 
        }, 3000);

        return ()=> clearInterval(timer);

    }, []);

    return (
        <main className="spaceOne">
            
                <div className="spaceOneHeader">
                    <h2>Recent <span>Projects</span></h2>
                </div>

                <div className="spaceOneContent">
                    <div className="spaceOneImageItem">
                        <img src={images[index]} alt="main screen"/>
                    </div>

                    <div className="spaceOneTextItem">

                        <div className="proHeader">
                            <h3>ISS Locator</h3>
                            <a href="https://github.com/burtscriptor/international-space-station-locator" target="_blank" rel="noopener noreferrer">
                            <img src={icon1} alt="Github icon" />
                            </a>
                            <a href="https://space-station-locator-90bf1b592e8e.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={icon2} alt="Go to demo" />
                            </a>
                        </div>
                        <p>Although this app looks small it took a decent amount of time. A create-react-app 
              using JavaScript and Node.js. It displays the location of the International Space Station
              on Google React Maps. A function fetches the location every seven seconds and updates
              the DOM via react. I committed a good deal of time reading the docs to work out how to achieve this
              and it was thrilling when it worked!</p>

              <div className="tabs">
                <p className="darkblue">React</p>
                <p className="white">CSS</p>
                <p className="blue">Node.js</p>
                <p className="lblue">Express.js</p>
           
              </div>

                    </div>
                </div>


            
        </main>
    );
};

export default SpaceOne;