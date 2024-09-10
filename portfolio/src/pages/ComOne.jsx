const icon1 = 'https://burtscriptor.github.io/portfolio-images/github.png';
const image1 = 'https://burtscriptor.github.io/portfolio-images/MtBlackHeath.png';

const ComOne = () => {
    return (
        <>
            <main className="spaceOne">
                <div className="spaceOneContent">
                    <div className="spaceOneImageItem" >
                        <img src={image1} alt="main screen" loading="lazy"/>
                    </div>

                    <div className="spaceOneTextItem">
                        <div className="proHeader">
                            <h3>Blackheath Wind Meter</h3>
                            <a
                                href="https://github.com/NickRoach/blackheath-wind-meter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={icon1} alt="Github icon" />
                            </a>
                            
                        </div>

                        <div className="spaceText">
                            <p>
                                Contributing to this project started by a senior developer. 
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
