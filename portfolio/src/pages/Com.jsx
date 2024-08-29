import '../styles/Com.css';
import { useState, useEffect } from 'react';
const image1 = 'https://burtscriptor.github.io/portfolio-images/CI.png';
const image2 = 'https://burtscriptor.github.io/portfolio-images/issues.png';

const images = [image1, image2];

const Com = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="com">
            <div className="com-container">
                <div className="com-child">Streamlined CI/CD using GitHub actions.</div>
                <div className="com-child">Editing .YAML files for CI/CD.</div>
                <div className="com-child">Using GitHub issues system.</div>
                <div className="com-child">Branching, merging, pushing.</div>
                <div className="com-child">Pull requests and rebasing.</div>
                <div className="com-child">
                    <img src={images[index]} alt={`Slide ${index}`} />
                </div>
            </div>
        </main>
    );
};

export default Com;
