import React from "react";

import Home from "./Home";
import Dose from "./Dose";
import DoseTwo from "./DoseTwo";
import SpaceTwo from "./Space2";
import SpaceOne from "./SpaceOne";
import Dine from "./IDine";
import IDineTwo from "./IDineTwo";
import Com from "./Com";
import ComOne from "./ComOne";
import Contact from "./ContactMe";
import AboutMe from "./AboutMe";
import HamburgerMenu from "../components/HamburgerMenu";

const MainLayout = () => {
    return (
        <>
            <HamburgerMenu />
            <div id="home_page">
                <Home />
            </div>
            <div id="projects">
                <Dose />
                <DoseTwo />
                <Dine />
                <IDineTwo />
                <SpaceOne />
                <SpaceTwo />
                <ComOne />
                <Com />
            </div>
            <div id="about_me">
                <AboutMe />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    );
};

export default MainLayout;
