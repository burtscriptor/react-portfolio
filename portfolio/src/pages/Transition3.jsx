import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';
import image1 from '../assets/nurse/nurse2.jpg';
import image2 from '../assets/story/seTeamwork.jpeg';

const words = ['nurse', 'software engineer'];

const Transition3 = () => {
    const [hovered, setIsHovered] = useState(false);
    const [hovered1, setIsHovered1] = useState(false);

    return (
        <div className="myStory">
           <div className="theStory">
            <div className="story center">
                <h2>How can I help?</h2>
                <div className="typeContainer">
                    <div className={!hovered ? "text-image" : "text-image reverse"} onMouseEnter={()=> setIsHovered(true)} 
             onMouseLeave={()=> setIsHovered(false)}>
                    <img src={image1} />
             <p> A nurse works with-in a multidisclinary team to achieve a patient-centric outcome.</p>
             
             </div>
             <div className={!hovered1 ? "text-image" : "text-image reverse"} onMouseEnter={()=> setIsHovered1(true)} 
             onMouseLeave={()=> setIsHovered1(false)}>
             <img src={image2} />
                <p> A software engineer works with-in a multidisclinary team to achieve a user-centric outcome.</p>
               
               
        
                
                </div>
            </div>
            </div>

            
           </div>
        </div>
    );
};

export default Transition3;