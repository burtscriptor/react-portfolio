import '../styles/ProjectPage1.css';
import React from 'react';
import image1 from '../assets/community/MtBlackHeath.png';


function Community() {
  return (
    <main className="projects">
      <div className="parent-left overflow">
        <h1 id="largeh1">Community</h1>
        <h2 id="smallh2">Blackheath Wind Station</h2>
        <p>
         Setup by paragliders near the take-off site. It meausres windspeed and direction.
         The measurements are displayed on a public website that was built with HTML and JavaScript.
        </p>
      </div>

      <div className="parent-right">
        <div className="image-container movedown">
            <img src={image1} />
        </div>
      </div>
    </main>
  );
}

export default Community;
