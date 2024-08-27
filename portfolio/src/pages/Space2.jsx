import '../styles/SpaceTwo.css'
import icon1 from '../assets/story/web-design.png';
import icon2 from '../assets/story/web-development.png';
import icon3 from '../assets/story/computer.png';

const SpaceTwo = () => {
    return (
        <main className="spaceTwo">

            <div className="spaceTwoContent">
            
                <div className="spaceTwoBox ">
                <div className="icon-container">
                    <img src={icon1} alt="frontend icon" />
                </div>
                    <h3>Frontend</h3>
                    <p> Deep dive into google-react-maps documentation. 
                        Set up APIkeys on Google Cloud Console.</p>
                    <p> Handled errors and data loading using multiple
                         booleans to render elements.</p>
                </div>

                <div className="spaceTwoBox ">
                <div className="icon-container">
                    <img src={icon2} alt="frontend icon" />
                </div>
                    <h3>Backend</h3>
                    <p>Deployed on Heroku but a "Mixed content" error - prevented loading. 
                        A secruity issue.</p>
                    <p>This is because the OpenNotify API uses HTTP, unsecured, 
                        and Heroku uses HTTPS, secured.</p>
                    
                </div>

                <div className="spaceTwoBox ">
                <div className="icon-container">
                <img src={icon3} alt="fullstack icon" />
                    </div>
                    <h3>Fullstack</h3>
                    <p>To resolve the error, I used Node and Express.js 
                        to create a proxy server 
                        for my frontend to the OpenNotify API, ensuring secure, 
                        server-side communication.
                        </p>
                </div>


            </div>
        </main>
    );
};

export default SpaceTwo;