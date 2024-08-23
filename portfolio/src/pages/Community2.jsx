import {useState, useEffect} from 'react';
import '../styles/ProjectPage2.css';
import image1 from '../assets/community/CI.png';
import image2 from '../assets/community/issues.png';
import image3 from '../assets/community/obs.png';


const images = [image1, image2, image3];

const Community2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <main className="m2-project">
      
      <div className="m2-upper">
        <h2 id="makesmallh2">Contributions & skills:</h2>

        <ul>
            <li>Problem solving fellow developers code</li>
            <li>Using the GitHub Issues ticket system</li>
          <li>Version control, branching, merging, pushing and making pull requests</li>
          
        </ul>
        <ul>
          <li>Continuous Integration using GitHub Actions</li>
          <li></li>
          <li>Editing YML files to streamline deployment from different branches</li>
        </ul>
      
      

      </div>
      <div className="m2-lower">
        <div className="m2-image-container">
         
        <img src={images[index]} alt={`Slide ${index}`} />
          
        </div>
        <div className="m2-links">
        <a href="https://mtblackheathwind.net/" className="button-link" target="_blank" rel="noopener noreferrer">View</a>
      </div>

        
      </div>
    </main>
  );
};

export default Community2;
