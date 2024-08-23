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
           <div className="theStory page white">
            <div className="story center white">
                <h2 className="header-left">How can I help you?</h2>
                <div className="typeContainer">
                    <div className={!hovered ? "text-image" : "text-image reverse"} onMouseEnter={()=> setIsHovered(true)} 
             onMouseLeave={()=> setIsHovered(false)}>
                    <img src={image1} />
             <p className="transition"> A nurse works with-in a multidisclinary team to achieve a patient-centric outcome.</p>
             
             </div>
             <div className={!hovered1 ? "text-image" : "text-image reverse"} onMouseEnter={()=> setIsHovered1(true)} 
             onMouseLeave={()=> setIsHovered1(false)}>
             <img src={image2} />
                <p className="transition"> A software engineer works with-in a multidisclinary team to achieve a user-centric outcome.</p>
               
               
        
                
                </div>
            </div>
            </div>

            
           </div>
        </div>
    );
};

export default Transition3;