import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';
import image1 from '../assets/nurse/nurse2.jpg';
import image2 from '../assets/story/seTeamwork.jpeg';

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
                <h2>How can I help you?</h2>
                <p>I'm a people person!</p>
                <div className="typeContainer">
                <p className="type-text">A <span className="colortext2 ">nurse</span> works with-in a multidisclinary team to achieve a patient-centric outcome.</p>
                <p className="type-text">A <span className="colortext2 ">software engineer</span> works with-in a multidisclinary team to achieve a user-centric outcome.</p>
                </div>
                <div className="t3-imageContainer">
                <img src={image2} />
                <img src={image1} />
            </div>
            </div>

            
           </div>
        </div>
    );
};

export default Transition3;