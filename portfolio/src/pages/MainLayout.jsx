import React from "react";

import Home from "./Home";
import Contact from "./ContactMe";
import AboutMe from "./AboutMe";
import HamburgerMenu from "../components/HamburgerMenu";
import Projects from "./Projects";

const MainLayout = () => {
    return (
        <>
            <HamburgerMenu />
            <div key="0" id="home_page">
                <Home />
            </div>
            <div key="1" id="projects">
                <Projects />
            </div>
            <div key="2" id="about_me">
                <AboutMe />
            </div>
            <div key="3" id="contact">
                <Contact />
            </div>
        </>
    );
};

export default MainLayout;
