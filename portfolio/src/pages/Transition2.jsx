import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';

import image1 from '../assets/story/colorHeart.webp';

import image5 from '../assets/story/navigate.png';


import image9 from '../assets/story/vitruvian.jpg';
import image10 from '../assets/story/puzzle.jpg';


const Transition2 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    
    return (
        <div className="myStory">
           <div className="theStory">
            <div className="story center">
                <h2>How does that work?</h2>
                <div className="typeContainer">
                    <div className="text-image" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {!isHovered ? (<p> Bodies have a front-end and a back-end!</p>) : (<p>I have a curious mind!</p>) }
                    <img src={image9} />
                        
                    </div>
                    <div className={!isHovered1 ? "text-image" : "text-image changeColour"} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                <p> A nurse knows how a system works
                 as a whole and as discrete  units</p>
                <img src={image1} />
                </div>
                    <div className="text-image" onMouseEnter={()=> setIsHovered2(true)} onMouseLeave={()=> setIsHovered2(false)}>
                        <p> A software engineer knows how a systems works as a whole and as discrete units</p>
                        <img src={ !isHovered2 ? image5 : image10 } />
                </div>
                
                </div>
    
            </div>
            
            
           </div>
        </div>
    );
};

export default Transition2;