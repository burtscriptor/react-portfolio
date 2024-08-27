import React, { useState, useEffect } from 'react';
import '../styles/MyStory.css';

const Skills = () => {

    return (
        <main className="tran-skills">
           
                <div className="tran-skills-header">
                <h2>Transferable skills</h2>
                </div>
                <div className="skills-container">
                <p className="type-text">High level<span className="colortext2 "> communication skills</span> across multiple mediums</p>
                <p className="type-text">Experience<span className="colortext2 "> problem solving</span> and implementing solutions</p>
                <p className="type-text">Experience<span className="colortext2 "> collaborating</span> in a team</p>
                <p className="type-text">Cultural<span className="colortext2 "> competency</span></p>
                <p className="type-text">Being<span className="colortext2 "> adaptability</span></p>
                <p className="type-text">Autonomous<span className="colortext2 "> critical thinking</span></p>

           </div>
        </main>
    );
};

export default Skills;