import icon1 from '../assets/icons/github.png';
import icon2 from '../assets/icons/play-button.png';
import image1 from '../assets/community/MtBlackHeath.png';

const ComOne = () => {
    return (
        <>
            <main className="spaceOne">
                <div className="spaceOneContent">
                    <div className="spaceOneImageItem">
                        <img src={image1} alt="main screen" />
                    </div>

                    <div className="spaceOneTextItem">
                        <div className="proHeader">
                            <h3>Blackheath Wind Meter</h3>
                            <a
                                href="https://github.com/burtscriptor/project1-minesweeper"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={icon1} alt="Github icon" />
                            </a>
                            <a
                                href="https://burtscriptor.github.io/project1-minesweeper/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={icon2} alt="Go to demo" />
                            </a>
                        </div>

                        <div className="spaceText">
                            <p>
                                Contributing to this project started by a paraglider. 
                                It measures windspeed and direction at the Blackheath 
                                launch site.
                            </p>
                        </div>

                        <div className="space-tabs">
                            <p className="darkblue">JavaScript</p>
                            <p className="lblue">CI/CD</p>
                            <p className="blue">Github</p>
                            <p className="white">AWS</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ComOne;
