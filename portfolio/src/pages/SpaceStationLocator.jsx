import '../styles/ProjectPage1.css'
import React, {useEffect, useState } from 'react';
import image1 from '../assets/iss/opening.png';
import image2 from '../assets/iss/fullscreen.png';
import image3 from '../assets/iss/listNames.png';
import image4 from '../assets/iss/apiProvider.png';
import image5 from '../assets/iss/key.png';
import image6 from '../assets/iss/env.png';
import image7 from '../assets/iss/advancedMarker.png'

const images = [ image1, image2, image3 ];


function SpaceStationLocator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <main className="projects">
        <div className="parent-left topmargin">
            <h2>ISS Locator</h2>
            <p>Although this app looks small it took a decent amount of time. A create-react-app 
              using JavaScript and Node.js. It displays the location of the International Space Station
              on Google React Maps. A function fetches the location every seven seconds and updates
              the DOM via react. I committed a good deal of time reading the docs to work out how to achieve this
              and it was thrilling when it worked!
            </p>
        </div>

        <div className="parent-right makespacefortop">
          <div className="image-container largeimage">

          <img src={images[index]} alt={`Slide ${index}`} />
            
          </div>
        </div>
      
     
    </main>
  );
}

export default SpaceStationLocator;