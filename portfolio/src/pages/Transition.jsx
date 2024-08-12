import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';

const words = ['nurse', 'software engineer'];

const Transition = () => {
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
                <p>I love tech and problem solving!</p>
                <div className="typeContainer">
                <p className="type-text">A <span className="colortext">nurse</span> solves problems, implements and tests the effectiveness of solutions</p>
                <p className="type-text">A <span className="colortext">software engineer</span> solves problems, implements and tests the effectiveness of solutions</p>
                </div>
              
               
               
            </div>
            
            
           </div>
           {/* <p className="fixed">Bodies have a front-end and a back-end!</p> */}
        </div>
    );
};

export default Transition;