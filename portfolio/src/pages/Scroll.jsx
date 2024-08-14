import React, { useEffect, useRef } from 'react';
import '../';

const Section = ({ children }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('visible');
                } else {
                    sectionRef.current.classList.remove('visible');
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="section animate-me">
            {children}
        </div>
    );
};

const Scroll = () => {
    return (
        <div>
            <Section>Section 1</Section>
            <Section>Section 2</Section>
            <Section>Section 3</Section>
        </div>
    );
};

export default Scroll;
