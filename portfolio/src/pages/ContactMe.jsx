import React, {useState} from 'react';
import '../styles/Contact.css';
import Animation from '../components/Animation';
import icon1 from '../assets/icons/mail.png';
import icon2 from '../assets/icons/linkedin.png';
import icon3 from '../assets/icons/github.png';


const Contact = () => {
    const [hoveredImage, setHovered] = useState(null);

    return (
        <main className="contact">
            <div className="contact-header">
                <div className="dog">
                    <h3>Let's chat!</h3>
                </div>
                <div className="coffee">
                    <p>
                        How can I help you? Let's queue up a refreshment.
                    </p>
                </div>
                <div className="do-it">
                    <button type="button">Send me a msg!</button>
                </div>
            </div>

            <div className="contact-body">
                <Animation className="contact-animation" />
                
            </div>

            <div className="contact-text">
                <p>Growing, gaining, and getting better each day.</p>
            </div>
            <div className="contact-email">
                <p>david.burt.jnr@gmail.com</p>
            </div>
            
            <div className="contact-icons">
                <img src={icon2} alt="linkedIn icon" 
                className={hoveredImage === 1 ? 'hovered' : ''}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(null)}/>
                <img src={icon1} alt="email icon" 
                className={hoveredImage === 2 ? 'hovered' : ''}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(null)}/>
                <img src={icon3} alt="Github icon" 
                className={hoveredImage === 3 ? 'hovered' : ''}
                onMouseEnter={() => setHovered(3)}
                onMouseLeave={() => setHovered(null)}/>
             </div>

             <div className="rights">
                <p>Dave Burt 2024 | All Rights Reserved</p>
             </div>
        </main>
    );
};

export default Contact;
