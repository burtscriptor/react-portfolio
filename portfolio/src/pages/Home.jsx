import '../styles/Home.css';
import DownloadCv from '../components/DownloadCv';
const avatar = 'https://burtscriptor.github.io/portfolio-images/avataaars.svg';


const Home = () => {

    return (
        <main className="home">
            <div className="home-container">
           
                <div className="home-punchline">
                   
                    <h2>Software engineer, Sydney </h2>

                    <p>
                        I love problem solving and coding applications!
                    </p>
                </div>

                <div className="home-image">
                    <img src={avatar} alt="avatar" />
                </div>
               <div className="home-text">
                <h2>Hey! I'm Dave, nice to meet you!</h2>
                <p>I am a logician and creative coder with a passion for solving
                     complex problems. Whether it's optimising front-end 
                     interfaces to enhance performance and create seamless user 
                     experiences, or architecting scalable back-end systems, 
                     I thrive on the challenges of development. The creative 
                     process, coupled with collaboration, brings me great 
                     satisfaction. While others might catch up on the latest 
                     episode of "Nonsense" on Binge, I find my guilty pleasure 
                     in honing my coding skills and pushing the boundaries of 
                     what's possible.</p>

                     {/* <p>Click to learn more about me</p> */}
                     <DownloadCv />
               </div>
            </div>
        </main>
    );
};

export default Home;
