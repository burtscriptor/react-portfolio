import React, { useState, useEffect } from 'react';
import '../styles/Transition.css';
import image1 from '../assets/story/howDoes.jpeg';
import image2 from '../assets/story/colorHeart.webp';

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
                <h2>How does that work?</h2>
                <p>I have a curious mind!</p>
                <div className="typeContainer">
                <p className="type-text">A <span className="colortext2 ">nurse</span> knows how a system works as a whole and as discrete units</p>
                <p className="type-text">A <span className="colortext2 ">software engineer</span> knows how a systems works as a whole and as discrete units</p>
                </div>
                <div className="t2-imageContainer">
                    <img src={image2} />
                    <img src={image1} />
                </div>
               
               
            </div>
            
            
           </div>
           {/* <p className="fixed">Bodies have a front-end and a back-end!</p> */}
        </div>
    );
};

export default Transition2;