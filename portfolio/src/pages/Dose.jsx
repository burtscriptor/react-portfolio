import icon1 from '../assets/icons/github.png';
import icon2 from '../assets/icons/play-button.png';
import image1 from '../assets/dose/DoseMaster.png';

const Dose = () => {
    return (
        <>
            <main className="spaceOne">
                <div className="spaceOneHeader">
                    <h2>Some of my recent work</h2>
                </div>

                <div className="spaceOneContent">
                    <div className="spaceOneImageItem">
                        <img src={image1} alt="main screen" />
                    </div>

                    <div className="spaceOneTextItem">
                        <div className="proHeader">
                            <h3>DoseMaster</h3>
                            <a
                                href="https://github.com/burtscriptor/open-ai/tree/styles"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={icon1} alt="Github icon" />
                            </a>
                            <a
                                href="https://dmv1-bd9d90030ccc.herokuapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={icon2} alt="Go to demo" />
                            </a>
                        </div>

                        <div className="spaceText">
                            <p>
                                DoseMaster is designed to help student nurses practice medication
                                calculation mathematics. Using OpenAI's technology, DoseMaster
                                generates questions and answers to simulate real-world scenarios.
                            </p>
                        </div>

                        <div className="space-tabs">
                            <p className="darkblue">React.js</p>
                            <p className="blue">OpenAI</p>
                            <p className="lblue">Node.js</p>
                            <p className="white">Express.js</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dose;
