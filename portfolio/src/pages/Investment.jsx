import image1 from '../assets/bootstrap.svg';
import image2 from '../assets/css-3.png';
import image3 from '../assets/html-5.png';
import image4 from '../assets/js.png';
import image5 from '../assets/react.png';
import image6 from '../assets/database.png';
import image7 from '../assets/nodejs.png';
import image8 from '../assets/python.png';
import image9 from '../assets/c-.png';
import image10 from '../assets/mongodb-icon-2.svg';
import image11 from '../assets/Django-logo.png';
import image12 from '../assets/tailwind.png';
import '../styles/Investment.css';


function Investment() {
    return (
      <main className="investment">
        <div className="invest-left">
          <div className="invest-header">
          <h2 id="makeSmallH1">Investing in my transition</h2>
          <h3>General Assembly</h3>
          </div>
          <div className="invest-text">
          <p>
           The Software Engineering Immersive course gave me 500 hours of practical 
           experience with software engineering
          guided by senior instructors with industry knowledge and experience.
          </p>
          </div>
        </div>
  
        <div className="invest-right">
          <div className="investImageContainer">
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
            <img src={image5}/>
            <img src={image6}/>
            <img src={image7}/>
            <img src={image8}/>
            <img src={image9}/>
            <img src={image10}/>
            <img src={image11}/>
            <img src={image12}/>
          </div>
        </div>
      </main>
    );
  }
  
  export default Investment;