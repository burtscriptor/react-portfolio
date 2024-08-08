import image1 from '../assets/icons/bootstrap.svg'
import image2 from '../assets/icons/css-3.png'
import image3 from '../assets/icons/html-5.png'
import image4 from '../assets/icons/js.png'
import image5 from '../assets/icons/react.png'
import image6 from '../assets/icons/database.png'
import image7 from '../assets/icons/nodejs.png'
import image8 from '../assets/icons/python.png'
import image9 from '../assets/icons/c-.png'
import '../styles/Investment.css'


function Investment() {
    return (
      <main className="projects">
        <div className="parent-left">
          <h1>Investing in my transition</h1>
          <h2>General Assembly</h2>
          <p>
           Software Engineering Immersive course gave me 500 hours of industry style hands on experience with coding and
           and seasoned instructors.
          </p>
        </div>
  
        <div className="parent-right">
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
            
          </div>
        </div>
      </main>
    );
  }
  
  export default Investment;