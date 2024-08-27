import '../styles/SpaceTwo.css';
import icon1 from '../assets/story/web-design.png';
import icon2 from '../assets/story/web-development.png';
import icon3 from '../assets/story/computer.png';

const IDineTwo = () => {
    return (
        <main className="spaceTwo">
            <div className="spaceTwoContent">
                
                <div className="spaceTwoBox frontend">
                    <div className="icon-container">
                        <img src={icon1} alt="frontend icon" />
                    </div>
                    <h3>Frontend</h3>
                    <p>
                      
                    </p>
                    <p>
                        Used EJS template language to dynamically render HTML based on data passed 
                        from backend. Helping to separate presentation layer from business logic. 
                    </p>
                </div>

                <div className="spaceTwoBox">
                    <div className="icon-container">
                        <img src={icon2} alt="frontend icon" />
                    </div>
                    <h3>Backend</h3>
                    <p>
                    Middleware handles requests and responses, enabling modular, 
                    organized code by processing requests before they reach route handlers.
                    </p>
                   
                </div>

                <div className="spaceTwoBox fullstack">
                    <div className="icon-container">
                        <img src={icon3} alt="fullstack icon" />
                    </div>
                    <h3>Database</h3>
                    <p>
                    Used middleware to ensure data integrity and validation
                     by preprocessing requests before they interact with the database.
                    </p>
                </div>

            </div>
        </main>
    );
};

export default IDineTwo;
