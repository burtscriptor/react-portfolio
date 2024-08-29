import '../styles/SpaceTwo.css';
const icon1 = 'https://burtscriptor.github.io/portfolio-images/web-design.png';
const icon2 = 'https://burtscriptor.github.io/portfolio-images/web-development.png';
const icon3 = 'https://burtscriptor.github.io/portfolio-images/computer.png';

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
