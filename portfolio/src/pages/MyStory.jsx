import '../styles/MyStory.css';
import Animation from '../components/Animation';
import image1 from '../assets/nurse/pharmacy.png';
import image2 from '../assets/nurse/stethoscope.png'

const MyStory = () => {
    return (
        <div className="myStory">
           <div className="theStory">
            <div className="story">
                <h2>My story</h2>
                <p>Thought that helping people was the best thing one could do so I became a</p>
                <h1>Registered Nurse</h1>
                <p>Accident and Emergency, Neurosurgical, Cononary Care Unit</p>

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