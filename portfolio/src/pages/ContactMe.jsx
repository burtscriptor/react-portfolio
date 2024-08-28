import React, { useState } from 'react';
import '../styles/Contact.css';
import Animation from '../components/Animation';
import icon1 from '../assets/mail.png';
import icon2 from '../assets/linkedin.png';
import icon3 from '../assets/github.png';

const Contact = () => {
    const [hoveredImage, setHovered] = useState(null);

    return (
        <main className="contact">
            <div className="contact-header">
                <div className="dog">
                    <h3>Let's chat!</h3>
                </div>
                <div className="coffee">
                    <p>How can I help you? Let's queue up a refreshment.</p>
                </div>
                <div className="do-it">
                <a
                    href="mailto:david.burt.jnr@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                ><button type="button">Send me a msg!</button></a>
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
                <a
                    href="https://www.linkedin.com/in/davejayburt"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={icon2}
                        alt="LinkedIn icon"
                        className={hoveredImage === 1 ? 'hovered' : ''}
                        onMouseEnter={() => setHovered(1)}
                        onMouseLeave={() => setHovered(null)}
                    />
                </a>
                <a
                    href="mailto:david.burt.jnr@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={icon1}
                        alt="Email icon"
                        className={hoveredImage === 2 ? 'hovered' : ''}
                        onMouseEnter={() => setHovered(2)}
                        onMouseLeave={() => setHovered(null)}
                    />
                </a>
                <a
                    href=  "https://github.com/burtscriptor"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={icon3}
                        alt="Email icon"
                        className={hoveredImage === 3 ? 'hovered' : ''}
                        onMouseEnter={() => setHovered(3)}
                        onMouseLeave={() => setHovered(null)}
                    />
                </a>
            </div>

            <div className="rights">
                <p>Dave Burt 2024 | All Rights Reserved</p>
            </div>
        </main>
    );
};

export default Contact;
