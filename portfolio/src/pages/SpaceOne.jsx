
import '../styles/SpaceOne.css';
import image1 from '../assets/iss/opening.png';
import icon1 from '../assets/icons/github.png';
import icon2 from '../assets/icons/play-button.png';


const SpaceOne = () => {
    return (

        <main className="spaceOne">
            
    
                <div className="spaceOneContent">
                    <div className="spaceOneImageItem">
                        <img src={image1} alt="main screen"/>
                    </div>

                    <div className="spaceOneTextItem">

                        <div className="proHeader">
                            <h3>ISS Locator</h3>
                            <a href="https://github.com/burtscriptor/international-space-station-locator" target="_blank" rel="noopener noreferrer">
                            <img src={icon1} alt="Github icon" />
                            </a>
                            <a href="https://space-station-locator-90bf1b592e8e.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={icon2} alt="Go to demo" />
                            </a>
                        </div>
                        <div className="spaceText">
                        <p>The ISS orbits the earth every 90 minutes.
                            Watch it travel accros the global. 
                            Displays the location of the ISS on an interactive google-react-maps and</p>
                        <p> updates every seven seconds.</p>
              </div>

              <div className="space-tabs">
                <p className="darkblue">React.js</p>
                <p className="blue">Node.js</p>
                <p className="lblue">Express.js</p>
                <p className="white">Maps.js</p>
           
              </div>

                    </div>
                </div>


            
        </main>
    );
};

export default SpaceOne;