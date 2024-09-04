import React, { useEffect, useState } from 'react';
import '../styles/AboutMe.css';
import image1 from '../assets/whaleof.webp';
import image2 from '../assets/wollongongtheband.webp';


const techIcons = [
  { name: "HTML 5",
    src: "https://burtscriptor.github.io/portfolio-images/html.png",
    alt: "HTML 5 icon"
  },

  { name: "CSS 3",
    src: "https://burtscriptor.github.io/portfolio-images/css-3.png",
    alt: "CSS 3 icon"
  },
  { name: "Django",
    src: "https://burtscriptor.github.io/portfolio-images/django.png",
    alt: "Django icon"
  },
  { name: "Git",
    src: "https://burtscriptor.github.io/portfolio-images/git.png",
    alt: "Git icon"
  },
  { name: "JavaScript",
    src: "https://burtscriptor.github.io/portfolio-images/js.png",
    alt: "JavaScript icon"
  },
  { name: "MongoDB",
    src: "https://burtscriptor.github.io/portfolio-images/mongoDB.png",
    alt: "MongoDB icon"
  },
  { name: "Node.js",
    src: "https://burtscriptor.github.io/portfolio-images/nodejs.png",
    alt: "Node.js icon"
  },
  { name: "Python",
    src: "https://burtscriptor.github.io/portfolio-images/python.png",
    alt: "Python icon"
  },
  { name: "React.js",
    src: "https://burtscriptor.github.io/portfolio-images/react.png",
    alt: "React.js icon"
  },
  { name: "Tailwind",
    src: "https://burtscriptor.github.io/portfolio-images/tailwind.png",
    alt: "Tailwind icon"
  },
  { name: "PostgreSQL",
    src: "https://burtscriptor.github.io/portfolio-images/postgresql.png",
    alt: "PostgreSQL icon"
  },
  { name: "Three.js",
    src: "https://burtscriptor.github.io/portfolio-images/three.png",
    alt: "Three.js icon"
  },
  { name: "Express.Js",
    src: "https://burtscriptor.github.io/portfolio-images/bootstrap.png",
    alt: "Express.js icon"
  },
  { name: "Figma",
    src: "https://burtscriptor.github.io/portfolio-images/figma.png",
    alt: "Figma icon"
  }
];


const AboutMe = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [invisible, setInvisilbe] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseMove, setMouseMove] = useState(false);
  const [icons, setIcons] = useState([]);
  const [index, setIndex] = useState(null);
  

  const handleIndex = (i) => {
    setIndex(i);
  };


  const generateIcons = () => {
    const iconArray = []
      for(let i = 0; i < techIcons.length; i++) {
        iconArray.push(<div className={ index == i ? "technology-icon display-over" : "technology-icon" } onMouseEnter={()=> handleIndex(`${i}`)}
         onMouseLeave={() => setIndex(null)}>
          <img src={techIcons[i].src} alt={techIcons[i].alt}/>
          <p className={ index == i ? "icon-text-display-over" : "invisible-text"}>{techIcons[i].name}</p> 
          </div>)
      };
      setIcons([iconArray])
  };
  
  useEffect(()=> {
    generateIcons();
  }, [index]);


  useEffect(() => {
    const handleMouseMove = (event) => {
      const element = document.querySelector('.skill-card'); // Update to your element selector
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
    
      const rotateX = (event.clientY - centerY) / 20;
      const rotateY = (event.clientX - centerX) / 20;
    
      setMousePosition({ x: rotateX, y: rotateY });
    };

    if (mouseMove) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseMove]);

  useEffect(() => {
    const handleScroll = () => {
      
      const scrollY = window.scrollY;
      setScrollPosition(scrollY );
      if(scrollY > 800) {
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
                <div className= "skill-card" style={{
              transform: mouseMove
                ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale3d(1, 1, 1)`
                : "",
            }} 
                   onMouseEnter={() => setMouseMove(true) } onMouseLeave={()=> setMouseMove(false)}>
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

        <div className="transferable-skills">
            <div className="skills-header">
              <p>SKILL SETS</p>
                <h2>Engineering skills.</h2>
            </div>

            <div className="skill-cards">
                <div className="skill-card">
                  <img src="https://burtscriptor.github.io/portfolio-images/web-development.png" alt="Icon for web development"/>
                    <p>Web Development</p>
                </div>

                <div className="skill-card">
                  <img src="https://burtscriptor.github.io/portfolio-images/server-side.png" alt="Icon for communication" />
                    <p>Server Side Construction</p>
                </div>
                <div className="skill-card">
                <img src="https://burtscriptor.github.io/portfolio-images/mobile.png" alt="Icon for collorbation" />
                <p>Mobile App Development</p>
                </div>
                <div className="skill-card">
                <img src="https://burtscriptor.github.io/portfolio-images/debugging.png" alt="Icon creative solutions" />
                <p>Quality Assurance</p>
                </div>
            </div>
        </div>
        
      <div className="technology-container">
        <div className="technology-header">
<p>WHAT I HAVE EXPERIENCE IN</p>
<h2>Technologies.</h2>
        </div>
       <div className="technology-icons">
        {icons}
       </div>
      </div>



    </main>
  );
};

export default AboutMe;

// onMouseEnter{()=> someting true}
// if somethinertrue then style = transform: perspective(1000px)(make bigger)
// rotateX(MOUSEX)?
// rotateY(deg)
// scale3D(1,1,1) 
