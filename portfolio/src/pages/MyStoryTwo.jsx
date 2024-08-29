import '../styles/BigCat.css';
const image1 = 'https://burtscriptor.github.io/portfolio-images/dave&cat.jpg';
const image4 = 'https://burtscriptor.github.io/portfolio-images/nurse4.jpg';
const image2 = 'https://burtscriptor.github.io/portfolio-images/snow.jpg';

const MyStoryTwo = () => {
    return (
        <main className="big-cat">
            <div className="cat-images">
                <div className="overlay-items item1">
                    <img id="cat" src={image1} alt="Dave and cat" />
                </div>
                <div className="overlay-items item2">
                    <img id="nurse" src={image4} alt="Dave with nursing team" />
                </div>
                <div className="overlay-items item3">
                    <img id="climbing" src={image2} alt="Dave climbing" />
                </div>
            </div>

            <div className="cat-text">
                <h2>Hi again! It's great to meet you!</h2>
                <p>
                    Since 2016, I've been employed as a registered nurse, 
                    where I've developed a strong foundation in teamwork 
                    and problem-solving. Inspired by the integration of 
                    technology into nursing and motivated by a desire to 
                    follow in my father's footsteps as a programmer, I'm 
                    now transitioning into software engineering.
                </p>
                <p>When I'm not creating applications I 
                    enjoy learning and playing music, rocking 
                    climbing and am 
                    equally happy at home cooking up a storm.
                </p>
            </div>

            <div className="cat-footer">
                {/* Footer content can be added here if needed */}
            </div>
        </main>
    );
};

export default MyStoryTwo;
