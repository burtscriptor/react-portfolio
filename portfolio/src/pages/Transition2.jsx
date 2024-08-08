import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';

const words = ['nurse', 'software engineer'];

const Transition2 = () => {
    const [index, setIndex] = useState(1)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length)

        }, 3000)
        return () => clearInterval(timer);
    }, [])

    return (
        <div className="myStory">
           <div className="theStory">
            <div className="story center">
                <h2>Why software engineering?</h2>
                <h1>Driven to know how things work!</h1>
                <div className="typeContainer">
               
                <p className="type-text">A <span className="colortext2 ">{words[index]}</span> knows how systems work together and as discrete functions.</p>
                </div>
              
               
               
            </div>
            
            
           </div>
           {/* <p className="fixed">Bodies have a front-end and a back-end!</p> */}
        </div>
    );
};

export default Transition2;