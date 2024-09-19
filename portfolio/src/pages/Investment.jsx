const image1 = "https://burtscriptor.github.io/portfolio-images/bootstrap.svg";
const image2 = "https://burtscriptor.github.io/portfolio-images/css-3.png";
const image3 = "https://burtscriptor.github.io/portfolio-images/html-5.png";
const image4 = "https://burtscriptor.github.io/portfolio-images/js.png";
const image5 = "https://burtscriptor.github.io/portfolio-images/react.png";
const image6 = "https://burtscriptor.github.io/portfolio-images/database.png";
const image7 = "https://burtscriptor.github.io/portfolio-images/nodejs.png";
const image8 = "https://burtscriptor.github.io/portfolio-images/python.png";
const image9 = "https://burtscriptor.github.io/portfolio-images/c-.png";
const image10 = "https://burtscriptor.github.io/portfolio-images/mongodb-icon-2.svg";
const image11 = "https://burtscriptor.github.io/portfolio-images/Django-logo.png";
const image12 = "https://burtscriptor.github.io/portfolio-images/tailwind.png";
import "../styles/Investment.css";


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