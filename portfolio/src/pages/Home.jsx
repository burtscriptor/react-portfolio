import '../styles/Home.css';
import avatar from '../assets/story/avataaars.svg';
import DownloadCv from '../components/DownloadCv';

const Home = () => {
    return (
        <main className="home">
            <div className="home-container">
                <div className="home-punchline">
                    <h2>Fullstack engineer, Sydney - {'{He/him}'}</h2>

                    <h3>
                        I design and code gorgeous, simple applications, 
                        and love what I do.
                    </h3>
                </div>

                <div className="home-image">
                    <img src={avatar} alt="avatar" />
                </div>

                <p>Hey!I'm Dave, nice to meet you!</p>

                <DownloadCv />
            </div>
        </main>
    );
};

export default Home;
