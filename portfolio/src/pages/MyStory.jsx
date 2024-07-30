import '../styles/MyStory.css';
import image1 from '../assets/medical-team.png';

const MyStory = () => {
    return (
        <div className="myStory">
           <div className="theStory">
            <div className="story-left">
                <h1>My story</h1>
                <div className="story-image"><img src={image1}/></div>
            </div>
            <div className="story-right"></div>
           </div>
        </div>
    );
};

export default MyStory;