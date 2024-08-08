import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';

const words = ['nurse', 'software engineer'];

const Transition3 = () => {
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
                <h1>I'm a people person!</h1>
                <div className="typeContainer">
               
                <p className="type-text">A <span className="colortext2 ">{words[index]}</span> works with-in a multidisclinary team to achieve a user-centric outcome.</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Transition3;