import image1 from '../assets/icons/bootstrap.svg';
import image2 from '../assets/icons/css-3.png';
import image3 from '../assets/icons/html-5.png';
import image4 from '../assets/icons/js.png';
import image5 from '../assets/icons/react.png';
import image6 from '../assets/icons/database.png';
import image7 from '../assets/icons/nodejs.png';
import image8 from '../assets/icons/python.png';
import image9 from '../assets/icons/c-.png';
import image10 from '../assets/icons/mongodb-icon-2.svg';
import image11 from '../assets/icons/Django-logo.png';
import image12 from '../assets/icons/tailwind.png';
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