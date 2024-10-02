import React, { useEffect, useState } from "react";
import "../styles/AboutMe.css";
const image1 = "https://burtscriptor.github.io/portfolio-images/whaleof.webp";
const image2 = "https://burtscriptor.github.io/portfolio-images/wollongongtheband.webp";
const image3 =  "https://burtscriptor.github.io/portfolio-images/the_real_bean_beanie.png";


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


const skills = [
  {name: "Problem Solving", src: "https://burtscriptor.github.io/portfolio-images/solution.png", alt: "Problem Solving icon"},
  {name: "Communication", src: "https://burtscriptor.github.io/portfolio-images/communication.png", alt: "Communication icon"},
  {name: "Collaboration", src: "https://burtscriptor.github.io/portfolio-images/teamwork.png", alt: "Collabortion icon"},
  {name: "Creative Solutions", src: "https://burtscriptor.github.io/portfolio-images/solution%20copy.png", alt: "Creative Solutions icon"}
];


const AboutMe = () => {
  const [icons, setIcons] = useState([]);
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(null);

  const handleIndex = (i) => {
    setIndex(i);
  };

  const generateSkillCards = () => {
    const skillCardsArray = [];
    for (let i = 0; i < skills.length; i++) {
      skillCardsArray.push(
        <div className="skill-card">
          <p>{skills[i].name}</p>
          <img src={skills[i].src} alt={skills[i].alt} />
        </div>
      );
    }
    setCards([skillCardsArray]);
  };

  const generateIcons = () => {
    const iconArray = [];
    for (let i = 0; i < techIcons.length; i++) {
      iconArray.push(
        <div
          className={index == i ? "technology-icon display-over" : "technology-icon"}
          onMouseEnter={() => handleIndex(i)}
          onMouseLeave={() => setIndex(null)}
          key={i}
        >
          <img src={techIcons[i].src} alt={techIcons[i].alt} />
          <p className={index == i ? "icon-text-display-over" : "invisible-text"}>
            {techIcons[i].name}
          </p>
        </div>
      );
    }
    setIcons([iconArray]);
  };

  useEffect(() => {
    generateIcons();
    generateSkillCards();
  }, [index]);

  return (
    <>    
   
    <main className="about-me">
      <div className="about-banner-image">
        <div className="home-punchline">
          <h2>About.</h2>
        </div>
      </div>

      <div className="about-me-text">
        <div className="about-me-text-container-one">
          <p>INTRODUCTION</p>
          <h2>Developer.</h2>
        </div>

        <div className="about-me-text-container-two">
          <div className="child-one">
            <p>
            I'm a junior software developer based in Sydney. 
            After 7 years in healthcare as a registered nurse and teacher, 
            I shifted to software development, driven by my 
            passion for technology. I bring a fresh perspective to 
            tech with my collaborative and detail-oriented approach. 
            I love tweaking CSS properties and creating 
            routes between frontends and backends.
            </p>

            <p>
              I deeply value my career and personal life. In both, I seek out challenging and
              rewarding situations. I enjoy connecting and collaborating with people on
              intellectual and creative levels. My colleagues know me as a problem-solver, a
              quick learner, and a friendly team member.
            </p>
          </div>

          <div className="child-two">
            <img
              src={image3}
              alt="Profile of Dave"
            />
          </div>
        </div>
      </div>

      <div className="about-me-text">
        <div className="about-me-text-container-one">
          <p>DEEPER DIVE</p>
          <h2>Climber.</h2>
        </div>

        <div className="about-me-text-container-two">
          <div className="child-one">
            <p>
            I’ve been an outdoor enthusiast for 12 years, starting on the small 
            cliffs of my hometown and advancing to major challenges like 
            'The Nose' of El Capitan. As part of a team of two, I developed 
            climbing routes such as 'Whale of a Time' and other 
            routes in the Illawarra area. This work involved problem-solving, 
            coordinating logistics, and adhering to safety standards. 
            Each year, hundreds of climbers tackle 'Whale of a Time' 
            safely, reflecting the success of our efforts.
            </p>
            <div className="links">
              <a
                href="https://www.thecrag.com/en/climbing/australia/wollongong/route/1124677161/ascents"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Crag, 'Whale of a time'
              </a>
            </div>
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
            <p>
            I thrive on expressing myself and collaborating with other musicians. 
            For over ten years, I've been a key member of 'Wollongong (the band),
            ' where teamwork and collective creativity are at the heart of what we do. 
            Together, we’ve released 109 albums on Spotify and Bandcamp. Our collaborative 
            spirit has also earned us local recognition, including a recent highlight
             where F1 driver Charles Leclerc featured one of our tracks in a 
             promo reel just before his win at Monza.
            </p>

           
            <div className="links">
              <a
                href="https://www.illawarramercury.com.au/story/8752767/charles-leclercs-secret-weapon-at-monza-a-wollongong-band/#comments"
                target="_blank"
                rel="noopener noreferrer"
              >
                Charles Leclerc and Wollongong
              </a>
              <a
                href="https://www.illawarramercury.com.au/story/8018081/wollongong-the-band-celebrates-100-albums-in-10-years/"
                target="_blank"
                rel="noopener noreferrer"
              >
                100 albums
              </a>
              <a
                href="https://www.illawarramercury.com.au/story/7917217/uci-the-album-wollongong-the-band-creates-rocknroll-memorabilia-for-fans/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Union Cycliste Internationale (UCI) and Wollongong
              </a>
            </div>
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

        <div className="skill-cards">{cards}</div>
      </div>

      <div className="transferable-skills">
        <div className="skills-header">
          <p>SKILL SETS</p>
          <h2>Engineering skills.</h2>
        </div>

        <div className="skill-cards">
          <div className="skill-card">
            <img
              src="https://burtscriptor.github.io/portfolio-images/web-development.png"
              alt="Icon for web development"
            />
            <p>Web Development</p>
          </div>

          <div className="skill-card">
            <img
              src="https://burtscriptor.github.io/portfolio-images/server-side.png"
              alt="Icon for communication"
            />
            <p>Server Side Construction</p>
          </div>
          <div className="skill-card">
            <img
              src="https://burtscriptor.github.io/portfolio-images/mobile.png"
              alt="Icon for collaboration"
            />
            <p>Mobile App Development</p>
          </div>
          <div className="skill-card">
            <img
              src="https://burtscriptor.github.io/portfolio-images/debugging.png"
              alt="Icon for creative solutions"
            />
            <p>Quality Assurance</p>
          </div>
        </div>
      </div>

      <div className="technology-container">
        <div className="technology-header">
          <p>WHAT I HAVE EXPERIENCE IN</p>
          <h2>Technologies.</h2>
        </div>
        <div className="technology-icons">{icons}</div>
      </div>
    </main>
    </>

  );
};

export default AboutMe;
