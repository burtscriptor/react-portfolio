import {useState, useEffect} from 'react';
import image1 from '../assets/community/CI.png';
import image2 from '../assets/community/issues.png';
import image3 from '../assets/community/obs.png';
import '../styles/ComTwo.css'

const images = [image1, image2, image3];

const ComTwo = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(timer); 
    }, []);

    return (
        <main className="comTwo">
            <div className="comTwoHeader">
                <h2>Skill development & contribution</h2>
            </div>
            <div className="comTwoContent">
                <div className="comTwoBox first">
                    <h3>Backend</h3>
                        <p>Working with senior developers</p>
                    
                    <p>Improving CI/CD using github actions</p>
                    <p>Editing .YML files</p>
                   
                </div>

                <div className="comTwoBox second">
                    <h3>Version control</h3>
                    <p>Using GitHub issues tickets</p>
                    <p>Branching, merging, pushing, rebasing</p>
                    <p>Pull requests</p>
                </div>

                <div className="comTwoBox third">
                 
                <img src={images[index]} alt={`Slide ${index}`} />
                    
                </div>


            </div>
        </main>
    );
};

export default ComTwo;