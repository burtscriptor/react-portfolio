import React, { useState } from 'react';
import "../styles/Projects.css";

const icon1 = "https://burtscriptor.github.io/portfolio-images/github.png";
const icon2 = "https://burtscriptor.github.io/portfolio-images/play-button.png";
const icon3 = "https://burtscriptor.github.io/portfolio-images/web-design.png";
const icon4 = "https://burtscriptor.github.io/portfolio-images/web-development.png";
const icon5 = "https://burtscriptor.github.io/portfolio-images/computer.png";
const image1 = "https://burtscriptor.github.io/portfolio-images/DoseMaster.png";
const image2 = "https://burtscriptor.github.io/portfolio-images/inclusiveDine.png";
const image3 = "https://burtscriptor.github.io/portfolio-images/opening.png";
const image4 = "https://burtscriptor.github.io/portfolio-images/MtBlackHeath.png";


const projectsInfoArray = [

    { name: "Dose Master", image: `${image1}`, text: "Single page react-app to help student nurses practice medication calculation mathematics. Leveraging OpenAI's technology, DoseMaster generates questions and answers to simulate real-world medication and dosages.",
      technologies: [ 'JavaScript', 'React', 'Node.js', 'Express.js'], 
      keyPointOne: [ { title: "OpenAI", 
        text: ["I developed my prompt engineering skills to ensure questions from OpenAI aligned with the application needs.", " I created a custom script to clean and remove unwanted characters from OpenAI response payload." ]}
    ],
      keyPointTwo: [ {title: "Frontend",
         text: ["I challenged myself to implement my own CSS and responsive design over using Tailwind.", " Incorporated interactive UI/UX for correctly and incorrectly answered questions."]}
    ],
      keyPointThree: [ {title: "Backend",
        text: ["I created an API using Node.js and Express.js to handle frontend-backend communications.", " To compare users answers against correct answer I use a data type check and string manipulation."]}
    ], 
    links: [ "https://github.com/burtscriptor/open-ai/tree/styles", "https://dmv1-bd9d90030ccc.herokuapp.com/"]  
    },

    { name: "Inclusive Dine", image: `${image2}`, text: "Restaurant review app designed to improve awareness of wheelchair accessibility by providing a platform for users to share and discover accessibility information for dining venues.",
      technologies: [ 'OAuth', 'MongoDB/ Mongoose', 'Node/ Express.js', 'HTML'], 
      keyPointOne: [ { title: "Frontend", 
        text: ["This project uses EJS template language to dynamically render HTML based on data received from the backend. This helps to separate the presentation layer from business logic." ]}
    ],
    keyPointTwo: [ {title: "Backend",
         text: ["Features a robust CRUD system and follows MVC architecture, utilising Google OAuth for secure authentication and the Mongoose ODM library for efficient data management."]}
    ],
    keyPointThree: [ {title: "Fullstack",
        text: ["Implemented best practice middleware to ensure data integrity and validation by preprocessing requests before they interact with the database."]}
    ], 
    links: ["https://github.com/burtscriptor/wheelify", "https://inclusive-dine-30e4e63a5918.herokuapp.com/"]  
    },

    { name: "ISS Locator", image: `${image3}`, text: "The ISS orbits the Earth every 90 minutes. Watch it travel across the globe. The location of the ISS is displayed on an interactive Google React Map and updates every seven seconds. What's next? Optimise memory usage.",
    technologies: [ 'Google-React-Maps','React', 'HTML', 'Node/ Express.js' ], 
    keyPointOne: [ { title: "Frontend", 
      text: ["I took a deep dive into google-react-maps documentation to learn how to use the library.", " I conditional render elements based on whether or not an error is encountered and data is load. To achieve this I use booleans." ]}
    ],
    keyPointTwo: [ {title: "Backend",
       text: ["Deployed on Heroku but a 'Mixed content' error prevented loading. A security issue.", "This is because the OpenNotify API uses HTTP, unsecured, and Heroku uses HTTPS, secured."]}
    ],
    keyPointThree: [ {title: "Fullstack",
      text: ["To resolve the error, I used Node and Express.js to create a proxy server", "for my frontend communicate with the OpenNotify API, ensuring secure, server-side communication."]}
    ],  
    links: ["https://github.com/burtscriptor/international-space-station-locator", "https://space-station-locator-90bf1b592e8e.herokuapp.com/"] 
    },

    { name: "Wind Meter", image: `${image4}`, text: "Contributing to this project started by senior developers, which measures windspeed and direction at the Blackheath paraglider launch site. Said information is then viewable on a private web page.",
    technologies: [ 'HTML', 'AWS','GitHub Actions', 'Git Version Control' ], 
    title: "Key learnings",
    keyPointOne: [ { title: 'CI/CD', text: ["I've been learning about streamlining CI/CD using GitHub actions.", " I've become fimilar with writing and editoring .YAML files to autmate deployment processes." ]} 
    ],  
    keyPointTwo: [ {title: "Version control",
        text: ["Collorbating remotely I've been developing features on my local branch and integrating into the main development branch. This requires merging, pushing, pull requests and the occassionally rebasing." ]}
     ],
     keyPointThree: [ {title: "GitHub",
       text: [ "We have been using GitHub issues system to assign and take ownership of ongoing feature development and changes."]},
    ],
    links: ["",""]
    }
    
];


const Projects = () => {
    const [index, setIndex] = useState(0);


    const handleIndex = (projectNo) => {
        setIndex(projectNo)
    };

    return (
        <main className="projects">
            <div className="projects_header">
                <h2>Projects</h2>
                </div>

                <div className="project_selector">
                    <div className="cards" onMouseEnter={()=> handleIndex(0)}>Project 1</div>
                    <div className="cards" onMouseEnter={()=> handleIndex(1)}>Project 2</div>
                    <div className="cards" onMouseEnter={()=> handleIndex(2)}>Project 3</div>
                    <div className="cards" onMouseEnter={()=> handleIndex(3)}>Project 4</div>
                </div>

                <div className="project_container">
                    <div className="p_c_child_left">
                    
                        <div className="project_image">
                            <img src={projectsInfoArray[index].image} />
                        </div>
                       
                       <div className="project_text">
                       <div className="project_title" >
                            <h4>{projectsInfoArray[index].name}</h4>
                        </div>  

                        <div className="project_descripton">
                            <p>
                            {projectsInfoArray[index].text}
                            </p>
                                  
                        </div>

                        <div className="project_link_icons">
                        <a href={projectsInfoArray[index].links[0]} target="_blank" rel="noopener noreferrer">
    <img src={icon1} alt="Link 1" />
</a>
<a href={projectsInfoArray[index].links[1]} target="_blank" rel="noopener noreferrer">
    <img src={icon2} alt="Link 2" />
</a>
                        </div>

                        <div className="tech_tabs">
                        <p className="darkblue">{projectsInfoArray[index].technologies[0]}</p>
                        <p className="blue">{projectsInfoArray[index].technologies[1]}</p>
                        <p className="lblue">{projectsInfoArray[index].technologies[2]}</p>
                        <p className="white">{projectsInfoArray[index].technologies[3]}</p>
                        </div>
                        </div>

                    </div>
                    
                    <div className="p_c_child_right">   
                        <div className="key_points_one">
                        <div className="icon_title">
                            <div className="icon_container">
                                <img src={icon3} />
                            </div>
                            <h5>{projectsInfoArray[index].keyPointOne[0].title}</h5>
                        </div>    
                            <p>{projectsInfoArray[index].keyPointOne[0].text}</p>

                        </div>
                        <div className="key_points_two">
                            <div className="icon_title">
                                <div className="icon_container">
                                <img src={icon4} />
                                </div>
                                <h5>{projectsInfoArray[index].keyPointTwo[0].title}</h5>
                                </div>    
                                <p>{projectsInfoArray[index].keyPointTwo[0].text}</p>
                
                        </div>
                        <div className="key_points_three">
                        <div className="icon_title">
                                <div className="icon_container">
                                <img src={icon5} />
                                </div>
                                <h5>{projectsInfoArray[index].keyPointThree[0].title}</h5>
                        </div>        
                                <p>{projectsInfoArray[index].keyPointThree[0].text}</p>
                            
                        </div>


                    </div>
                </div>

        </main>
    );

};

export default Projects;
