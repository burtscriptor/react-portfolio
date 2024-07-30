import '../styles/SpaceStationLocator.css'
import React from 'react';
import image1 from '../assets/iss/opening.png';
import image2 from '../assets/iss/fullscreen.png';
import image3 from '../assets/iss/listNames.png';
import image4 from '../assets/iss/apiProvider.png';
import image5 from '../assets/iss/key.png';
import image6 from '../assets/iss/env.png';
import image7 from '../assets/iss/advancedMarker.png'


function SpaceStationLocator() {
  return (
    <main className="projects-2">
        <div className="parent-left-2">
            <h2>Space Station Locator</h2>
            <p>Although this app looks small it took a decent amount of time. A create-react-app 
              using JavaScript and Node.js. It displays the location of the International Space Station
              on Google React Maps. A function fetches the location every seven seconds and updates
              the DOM via react. I committed a good deal of time reading the docs to work out how to achieve this
              and it was thrilling when it worked!
            </p>
        </div>

        <div className="parent-right-2">
          <div className="image-container-2">
            <div className="image-one-2">
            
            </div>

            <div className="image-two-2">
      
            </div>

            <div className="image-three-2">
          
            </div>

            <div className="image-four-2">
              <img src={image7} />

            </div>

            <div className="image-five-2">
              <img src={image5}/>
            </div>

            <div className="image-six-2">
              <img src={image6} />
              <div className="space">

              </div>
            </div>

          </div>
        </div>
      
     
    </main>
  );
}

export default SpaceStationLocator;