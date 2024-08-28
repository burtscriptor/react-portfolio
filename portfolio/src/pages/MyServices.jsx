import '../styles/MyServices.css'

import image1 from '../assets/web-design.png';
import image2 from '../assets/web-development.png';
import image3 from '../assets/computer.png';

const MyServices = () => {
    return (
        <main className="services">
            <div className="servicesHeader">
                <h2>My services</h2>
            </div>
            <div className="servicesContent">
                <div className="serviceBox first">
                    <img className="serviceIcon" src={image1}></img>
                    <h3>Frontend</h3>
                    <p>Utilizing React, Next.js, JavaScript/TypeScript, Tailwind, and Bootstrap, 
                        our frontend development services focus is to create responsive, 
                        high-performance websites. I deliver user-friendly designs that enhance engagement and drive business growth, 
                        ensuring a visually appealing and interactive experience across all platforms.</p>

                </div>
                <div className="serviceBox second">
                <img className="serviceIcon" src={image2}></img>
                    <h3>Backend</h3>
                    <p>Backend development services leverages Node.js, Python, 
                        and both SQL and No-SQL databases to build reliable and 
                        efficient server-side solutions. I focus on constructing 
                        scalable architectures that support smooth data operations and 
                        consistent performance, laying a solid foundation for digital 
                        infrastructures.</p>
                    
                </div>
                <div className="serviceBox third">
                <img className="serviceIcon" src={image3}></img>
                    <h3>Fullstack</h3>
                    <p>Leveraging cutting-edge technologies, my full-stack development services combine frontend
                         expertise in React and Next.js with backend proficiency in Node.js, MongoDB, 
                         PostgreSQL, and Python. This integration ensures robust, scalable, 
                        and efficient full-cycle development 
                        solutions that meet complex business needs effectively.</p>
                    
                    
                </div>


            </div>
        </main>
    );
};

export default MyServices;