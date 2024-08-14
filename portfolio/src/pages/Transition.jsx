import React, { useEffect, useRef } from 'react';
import '../styles/Transition.css';

const Transition = () => {
    // Refs for the elements to animate
    const pRef = useRef(null);
    const h2Ref = useRef(null);
    const divRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class when the element is in view
                    entry.target.classList.add('visible');
                } else {
                    // Remove the 'visible' class when the element is out of view
                    entry.target.classList.remove('visible');
                }
            },
            {
                threshold: 0.7, // Trigger when 10% of the element is visible
            }
        );

        
        if (pRef.current) {
            observer.observe(pRef.current);
        }
        if (h2Ref.current) {
            observer.observe(h2Ref.current);
        }
        if (divRef.current) {
            observer.observe(divRef.current);
        }
        
        return () => {
            // Cleanup the observer
            if (pRef.current) {
                observer.unobserve(pRef.current);
            }
            if (h2Ref.current) {
                observer.unobserve(h2Ref.current);
            }
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
            
            
        };
    }, []);

    return (
        <div className="myStory">
            <div className="theStory">
                <div  className="story1 center background-image">
                    <h2 ref={h2Ref} className="stickout">Why software engineering?</h2>
                    <p ref={pRef} className="stickout">I &hearts; [tech] and [problem solving!]</p>
                    <div  ref={divRef} className="typeContainer stickout">
                        <p>
                            A nurse solves problems, implements and tests the effectiveness of solutions
                        </p>
                        <p >
                            A software engineer solves problems, implements and tests the effectiveness of solutions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transition;
