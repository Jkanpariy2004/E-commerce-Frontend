import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import AboutSec from "../Common/AboutSec";
import MemberImg from '../../assets/images/team1.jpg'
import HeroSec from "../Common/HeroSec";
import Testimonials from "../Common/Testimonials";
import TeamMembers from "../Common/TeamMembers";

function About() {
    return (
        <div>
            <>
                <Header />

                <main>
                    <HeroSec preHeading='Quality. Integrity. Value' heading='About Us' />

                    <AboutSec />

                    <Testimonials />

                    <TeamMembers />
                </main>

                <Footer />
            </>
        </div>
    );
}

export default About;
