import '../styles/MyStory.css';
import Animation from '../components/Animation';
import image1 from '../assets/nurse/pharmacy.png';
import image2 from '../assets/nurse/stethoscope.png'

const MyStory = () => {
    return (
        <div className="myStory">
           <div className="theStory">
            <div className="story">
                <p>A journey of a thousand miles begins with a single step</p>
                <h2>Registered Nurse to Software Engineer</h2>
                <div className="animation-container">
                    <img src={image1} className="redcross"/>
                <Animation className="animation"/>
                <img src={image2} className="steth"/>
                </div>

            </div>
           </div>
        </div>
    );
};

export default MyStory;