import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';

const Skills = () => {

    return (
        <div className="myStory skills">
           <div className="theStory">
            <div className="story center">
                
                <h2 className="makesmallh2">Transferable skills</h2>
                <div className="skillsContainer">
                <p className="type-text">High level<span className="colortext2 "> communication skills</span> across multiple mediums</p>
                <p className="type-text">Experience<span className="colortext2 "> problem solving</span> and implementing solutions</p>
                <p className="type-text">Experience<span className="colortext2 "> collaborating</span> in a team</p>
                <p className="type-text">Cultural<span className="colortext2 "> competency</span></p>
                <p className="type-text">Being<span className="colortext2 "> adaptability</span></p>
                <p className="type-text">Autonomous<span className="colortext2 "> critical thinker</span></p>
                {/* <p className="type-text">Attention to<span className="colortext2 "> detail</span></p> */}
                
                </div>
            </div>
           </div>
        </div>
    );
};

export default Skills;