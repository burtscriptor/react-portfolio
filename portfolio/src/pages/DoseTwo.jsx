import '../styles/SpaceTwo.css';
const icon1 = 'https://burtscriptor.github.io/portfolio-images/web-design.png';
const icon2 = 'https://burtscriptor.github.io/portfolio-images/web-development.png';
const icon3 = 'https://burtscriptor.github.io/portfolio-images/computer.png';

const DoseTwo = () => {
    return (
        <main className="spaceTwo">
            <div className="spaceTwoContent">
                <div className="spaceTwoBox frontend">
                    <div className="icon-container">
                        <img src={icon1} alt="frontend icon" />
                    </div>
                    <h3>OpenAI</h3>
                    <p>
                        Tailored prompt engineering to ensure questions from OpenAI are accurate to application need.
                    </p>
                    <p>
                        Created own module to remove unwanted characters in openAI response payload.
                    </p>
                </div>

                <div className="spaceTwoBox">
                    <div className="icon-container">
                        <img src={icon2} alt="frontend icon" />
                    </div>
                    <h3>Frontend</h3>
                    <p>
                        Departed from Tailwind and challenged myself to do all the CSS.
                    </p>
                    <p>
                        Different interactivity if a question is answered right or wrong.
                    </p>
                </div>

                <div className="spaceTwoBox fullstack">
                    <div className="icon-container">
                        <img src={icon3} alt="fullstack icon" />
                    </div>
                    <h3>Backend</h3>
                    <p>
                        Created an API with Node.js and Express.js to handle interactions between frontend and backend.
                    </p>
                    <p>
                        Checking data types and string manipulation to check users' answers against stored answers.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default DoseTwo;
