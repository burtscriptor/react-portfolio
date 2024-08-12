import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';

const Skills = () => {

    return (
        <div className="myStory">
           <div className="theStory">
            <div className="story center">
                
                <h2 className="makesmallh2">Transferable skills</h2>
                <div className="typeContainer skillsContainer">
                <p className="type-text">High level<span className="colortext2 "> communication skills</span> across multiple mediums</p>
                <p className="type-text">Experience<span className="colortext2 "> understanding problems</span> and implementing solutions</p>
                <p className="type-text">Experience<span className="colortext2 "> collaborating</span>  with professionals and members of the public</p>
               
                </div>
            </div>
           </div>
        </div>
    );
};

export default Skills;