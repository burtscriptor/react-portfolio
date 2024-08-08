import '../styles/ProjectPage2.css';
import React, { useState, useEffect } from 'react';
import image1 from '../assets/iss/apiProvider.png';
import image7 from '../assets/iss/advancedMarker.png';
import image2 from '../assets/iss/sever.png';
import image3 from '../assets/iss/http.png';
import image4 from '../assets/iss/useEffect.png';
import image5 from '../assets/iss/apiProvider.png';
import image6 from '../assets/iss/booleans.png';

const images = [image1, image2, image3, image4, image5, image6, image7];

function SpaceStationLocatorTwo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="m2-project">
      <div className="m2-upper">
        <h2>Problems, solutions and lessons:</h2>
        <ul>
          <li>Use of multiple booleans to decide which elements to be rendered</li>
          <li>Tried to deploy on Heroku but ran into a "Mixed content" error</li>
          <li>Because the openNotify API uses HTTP and Heroku uses HTTPS</li>
        </ul>
        <ul>
          <li>Research on Stack Overflow => </li>
          <li>Proxy server to make API call and serve up to the front-end</li>
          <li>This maintains secure connection throughout</li>
        </ul>
      </div>
      <div className="m2-lower">
        <div className="m2-image-container">
          <img src={images[index]} alt={`Slide ${index}`} />
        </div>
        <div className="m2-links">
          <a href="https://space-station-locator-90bf1b592e8e.herokuapp.com/" className="button-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href="https://github.com/burtscriptor/international-space-station-locator" className="button-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </main>
  );
}

export default SpaceStationLocatorTwo;
