import '../styles/SpaceStationLocator.css'
import React from 'react';
import image1 from '../assets/iss/apiProvider.png';
import image7 from '../assets/iss/advancedMarker.png'
import image2 from '../assets/iss/sever.png';
import image3 from '../assets/iss/http.png';
import image4 from '../assets/iss/useEffect.png';
import image5 from '../assets/iss/apiProvider.png';
import image6 from '../assets/iss/booleans.png';


function SpaceStationLocatorTwo() {
  return (
    <main className="projects-2-2">
        <div className="parent-left-2">
            <h2>Problems, solutions and learning:</h2>
            <p>I tried to deploy on Heruko but ran into a "Mixed content" error 
                because the openNotify api uses HTTP and Heroko uses HTTPS. After some searching on
                around StackOverflow I came to the realisation I could build
                a proxy server to serve up the content to the frontend and avoid the error. 
                Another aspect of this project that tested me was using the values of multiple booleans
                to decide which elements should be rendered. 
            </p>
        </div>

        <div className="parent-right-2">
          <div className="image-container-2-2">
            <div className="image-one-2-2">
            <img src={image5} />
            </div>

            <div className="image-two-2-2">
            
            <img src={image3} />
            </div>

            <div className="image-three-2-2">
             <img src={image2} />
             <div className="space-links">
             <span><p>Play</p></span>
               <span> <p>Code</p> </span>
               
            </div>
             
            </div>

            <div className="image-four-2-2">
            <img src={image6} />
            
            </div>

          </div>
        </div>
      
     
    </main>
  );
}

export default SpaceStationLocatorTwo;