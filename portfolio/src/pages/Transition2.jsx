import React, { useState, useEffect, useRef } from 'react';
import '../styles/Transition.css';

import image1 from '../assets/story/colorHeart.webp';
import image5 from '../assets/story/navigate.png';
import image9 from '../assets/story/vitruvian.jpg';
import image10 from '../assets/story/puzzle.jpg';

const Transition2 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const midDivRef = useRef(null);
    const headerRef = useRef(null);
    
    
useEffect(()=> {
    const timer = setInterval(() => {
        setIsHovered2((prev) => !prev);
    }, 3000)

    return () => clearInterval(timer)
}, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            {
                threshold: 0.2,
            }
        );


         const currentmidDivRef = midDivRef.current;
         const currentHeaderRef = headerRef.current;
         

        if (currentmidDivRef) {
            observer.observe(currentmidDivRef);
        }
        if (currentHeaderRef) {
            observer.observe(currentHeaderRef)
        }
        

        return () => {
            if(currentmidDivRef.current) {
                observer.unobserve(currentmidDivRef);
            }
            if (currentHeaderRef.current) {
                observer.unobserve(currentHeaderRef)
            }
        };
    }, []);

    return (
        <div className="myStory">
            <div className="theStory page">
                <div className="story center">
                    <h2 ref={headerRef} className="header-left side-from-left">How does that work?</h2>
                    <div className="typeContainer">
                        <div className="text-image reverse" onMouseEnter={() => setIsHovered(true)} >
                            {!isHovered ? (<p className="transition">Hover</p>) : (<p className="transition">I have a curious mind!</p>) }
                            <img src={image9} alt="Vitruvian Man" />
                        </div>
                        <div ref={midDivRef} className= "text-image-middle reverse" >
                            <p className="transition"> nurse knows how a system works as a whole and as discrete units</p>
                            <img src={image1} alt="Color Heart" />
                        </div>
                        <div className="text-image reverse" onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                            <p className="transition">A software engineer knows how a systems works as a whole and as discrete units</p>
                            <img src={!isHovered2 ? image5 : image10} alt="Navigation or Puzzle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transition2;
