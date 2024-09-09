import '../styles/Home.css';
import DownloadCv from '../components/DownloadCv';
const avatar = 'https://burtscriptor.github.io/portfolio-images/avataaars.svg';


const Home = () => {

    return (
        <main className="home">
            <div className="home-container">
           
                <div className="home-punchline">
                   
                    <p>Hey!I'm Dave, nice to meet you!</p>
                    <h2>Fullstack engineer, Sydney </h2>

                    <h3>
                        I love problem solving and coding applications!
                    </h3>
                </div>

                <div className="home-image">
                    <img src={avatar} alt="avatar" />
                </div>
                <DownloadCv />
            </div>
        </main>
    );
};

export default Home;
