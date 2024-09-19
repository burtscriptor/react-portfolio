import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import "../styles/SpaceTwo.css";

const icon1 = "https://burtscriptor.github.io/portfolio-images/web-design.png";
const icon2 = "https://burtscriptor.github.io/portfolio-images/web-development.png";
const icon3 = "https://burtscriptor.github.io/portfolio-images/computer.png";

const SpaceTwo = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);

  const handleEnter = (index) => {
    setIsVisible((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = true;
      return newVisibility;
    });
  };

  return (
    <main className="spaceTwo">
      <div className="spaceTwoContent">
        <Waypoint onEnter={() => handleEnter(0)}>
          <div className={isVisible[0] ? "spaceTwoBox visible" : "spaceTwoBox invisible"}>
            <div className="icon-container">
              <img src={icon1} alt="frontend icon" />
            </div>
            <h3>Frontend</h3>
            <p>Deep dive into google-react-maps documentation. 
               Set up API keys on Google Cloud Console.</p>
            <p>Handled errors and data loading using multiple booleans to render elements.</p>
          </div>
        </Waypoint>

        <Waypoint onEnter={() => handleEnter(1)}>
          <div className={isVisible[1] ? "spaceTwoBox visible" : "spaceTwoBox invisible"}>
            <div className="icon-container">
              <img src={icon2} alt="backend icon" />
            </div>
            <h3>Backend</h3>
            <p>Deployed on Heroku but a "Mixed content" error prevented loading. 
               A security issue.</p>
            <p>This is because the OpenNotify API uses HTTP, unsecured, 
               and Heroku uses HTTPS, secured.</p>
          </div>
        </Waypoint>

        <Waypoint onEnter={() => handleEnter(2)}>
          <div className={isVisible[2] ? "spaceTwoBox visible" : "spaceTwoBox invisible"}>
            <div className="icon-container">
              <img src={icon3} alt="fullstack icon" />
            </div>
            <h3>Fullstack</h3>
            <p>To resolve the error, I used Node and Express.js 
               to create a proxy server</p> 
            <p>for my frontend to the OpenNotify API, 
               ensuring secure, server-side communication.</p>
          </div>
        </Waypoint>
      </div>
    </main>
  );
};

export default SpaceTwo;