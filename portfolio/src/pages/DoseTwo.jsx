import "../styles/SpaceTwo.css";

const icon1 = "https://burtscriptor.github.io/portfolio-images/web-design.png";
const icon2 = "https://burtscriptor.github.io/portfolio-images/web-development.png";
const icon3 = "https://burtscriptor.github.io/portfolio-images/computer.png";

const DoseTwo = () => {
    return (
        <main className="spaceTwo">
            <div className="spaceTwoContent">
                
                <div className="spaceTwoBox frontend">
                    <div className="icon-container">
                        <img src={icon1} alt="OpenAI icon" />
                    </div>
                    <h3>OpenAI</h3>
                    <p>
                        Tailored prompt engineering to ensure questions from OpenAI align accurately with application needs.
                    </p>
                    <p>
                        Developed a custom module to clean and remove unwanted characters from OpenAI response payloads.
                    </p>
                </div>

                <div className="spaceTwoBox">
                    <div className="icon-container">
                        <img src={icon2} alt="Frontend icon" />
                    </div>
                    <h3>Frontend</h3>
                    <p>
                        Opted to forgo Tailwind, challenging myself to implement all CSS from scratch.
                    </p>
                    <p>
                        Incorporated interactive feedback for correct and incorrect answers.
                    </p>
                </div>

                <div className="spaceTwoBox fullstack">
                    <div className="icon-container">
                        <img src={icon3} alt="Backend icon" />
                    </div>
                    <h3>Backend</h3>
                    <p>
                        Built an API using Node.js and Express.js to handle frontend-backend interactions.
                    </p>
                    <p>
                        Implemented data type checks and string manipulation to verify user answers against stored solutions.
                    </p>
                </div>

            </div>
        </main>
    );
};

export default DoseTwo;
