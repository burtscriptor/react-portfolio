import React from 'react';
import Animation from '../components/Animation';
import DownloadCv from '../components/DownloadCv';
import '../styles/AboutMe.css'
import profile from '../assets/AvatarMaker.svg'
import downArrow from '../assets/arrow.png'
import Navbar from '../components/NavBar';
 


const AboutMe = () => {
    return (
        <>
       <Navbar />
        <div className="parent-container">
            
           
            <div className="big-text-container">
                <div className="big-text-one"> <p>Design</p></div>
                <div className="big-text-two"><p>Develop</p></div>
                <div className="big-text-three"><p>Deploy</p></div>
         
            </div>
            <div className="small-text-container">
                <div className="small-text-one">
                <p>Hey, I'm Dave!</p>
                <img className="profile-img" src={profile}/>
                </div>
                <div className="small-text-two">
                    <p>A fullstack engineer,</p>
                    <p>a byte of frontend and a byte of backend.</p>
                    <p>- Sydney, Australia</p>
                    <DownloadCv />
                    <img className="down-arrow" src={downArrow} />
                </div>
            </div>
      
    </div>
    </>
    
    );
};

export default AboutMe;
