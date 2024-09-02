import React, { useEffect, useState } from 'react';
import '../styles/AboutMe.css';
import image1 from '../assets/whaleof.webp';
import image2 from '../assets/wollongongtheband.webp';


const AboutMe = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [invisible, setInvisilbe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const scroll = window.scrollY;
      setScrollPosition(scroll);
      if(scroll > 800) {
        console.log("Scroll position:", scroll);
        setInvisilbe(true);

      }else{
        setInvisilbe(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="about-me">
      <div className="about-banner-image">
        <div className="home-punchline">
          <h2>Fullstack engineer, Sydney</h2>
        </div>
        <div className={ !invisible ? "about-profile-pic" : "invisible"} >
            <img src="https://burtscriptor.github.io/portfolio-images/avataaars.svg"/>
        </div>
      </div>

      <div className="about-me-text">

                <div className="about-me-text-container-one">
                    <p>INTRODUCTION</p>
                <h2>About.</h2>

                </div>

                <div className="about-me-text-container-two">

                <div className="child-one">
                <p>I'm a junior software developer based in Melbourne.
                     After dedicating 4 years in accounting as a tax 
                     accountant and accounts officer, I embraced a new 
                     journey into software engineering. This shift is 
                     fueled by my passion for technology and recognizing
                      that my meticulous nature could bring fresh
                       insights to tech.
                       </p>

                  <p>  I deeply value a balanced career, both challenging and rewarding. 
                    My colleagues know me as a problem-solver, a quick learner, 
                    and a friendly team member. Such traits, combined with my
                     background spanning finance and technology, empower me 
                     to craft software solutions that resonate with real needs,
                      harmoniously merging traditional expertise with contemporary
                       innovation. With each day, I'm presented with a fresh 
                       opportunity to learn, innovate, and leave a lasting impact.
                       </p>
                
                </div>

                <div className="child-two">
                <img src="https://raw.githubusercontent.com/burtscriptor/portfolio-images/main/dave%26cat.jpg" alt="Dave and a cat in a park" />

                </div>

                </div>
                
        </div>

        <div className="about-me-text">

                <div className="about-me-text-container-one">
                    <p>DEEPER DIVE</p>
                <h2>Hobbies.</h2>

                </div>

                <div className="about-me-text-container-two">

                <div className="child-one">
                <p>I'm a junior software developer based in Melbourne.
                     After dedicating 4 years in accounting as a tax 
                     accountant and accounts officer, I embraced a new 
                     journey into software engineering. This shift is 
                     fueled by my passion for technology and recognizing
                      that my meticulous nature could bring fresh
                       insights to tech.
                       </p>

                  <p>  I deeply value a balanced career, both challenging and rewarding. 
                    My colleagues know me as a problem-solver, a quick learner, 
                    and a friendly team member. Such traits, combined with my
                     background spanning finance and technology, empower me 
                     to craft software solutions that resonate with real needs,
                      harmoniously merging traditional expertise with contemporary
                       innovation. With each day, I'm presented with a fresh 
                       opportunity to learn, innovate, and leave a lasting impact.
                       </p>
                
                </div>

                <div className="child-two">
                <img src={image1} alt="Dave climbing with stunning coast views" />

                </div>

                </div>
                
        </div>

        <div className="about-me-text">

                <div className="about-me-text-container-one">
                    <p>DEEPER DIVE</p>
                <h2>Musician.</h2>

                </div>

                <div className="about-me-text-container-two">

                <div className="child-one">
                <p>I'm a junior software developer based in Melbourne.
                     <a href="https://www.illawarramercury.com.au/story/7917217/uci-the-album-wollongong-the-band-creates-rocknroll-memorabilia-for-fans/"  target="_blank"
                                rel="noopener noreferrer">UCI</a>
                     accountant and accounts officer,
                     <a href="https://www.illawarramercury.com.au/story/8018081/wollongong-the-band-celebrates-100-albums-in-10-years/" target="_blank"
                                rel="noopener noreferrer">HUNDRED</a> 
                                 album 
                     journey into software engineering. This shift is 
                     fueled by my passion for technology and recognizing
                      that my meticulous nature could bring fresh
                       insights to tech.
                       </p>

                  <p>  I deeply value a balanced career, both challenging and rewarding. 
                    My colleagues know me as a problem-solver, a quick learner, 
                    and a friendly team member. Such traits, combined with my
                     background spanning finance and technology, empower me 
                     to craft software solutions that resonate with real needs,
                      harmoniously merging traditional expertise with contemporary
                       innovation. With each day, I'm presented with a fresh 
                       opportunity to learn, innovate, and leave a lasting impact.
                       </p>
                
                </div>

                <div className="child-two">
                <img src={image2} alt="Dave and band members of Wollongong the band" />

                </div>

                </div>
                
        </div>

        <div className="transferable-skills">
            <div className="skills-header">
              <p>SKILL SETS</p>
                <h2>Transferable skills.</h2>
            </div>

            <div className="skill-cards">
                <div className="skill-card">
                  <img src="https://burtscriptor.github.io/portfolio-images/solution.png" alt="Icon for problem solving"/>
                    <p>Problem solving</p>
                </div>

                <div className="skill-card">
                  <img src="https://burtscriptor.github.io/portfolio-images/communication.png" alt="Icon for communication" />
                    <p>Communication</p>
                </div>
                <div className="skill-card">
                <img src="https://burtscriptor.github.io/portfolio-images/teamwork.png" alt="Icon for collorbation" />
                <p>Collorbation</p>
                </div>
                <div className="skill-card">
                <img src="https://burtscriptor.github.io/portfolio-images/solution%20copy.png" alt="Icon creative solutions" />
                <p>Creative solutions</p>
                </div>
            </div>
        </div>
    </main>
  );
};

export default AboutMe;
