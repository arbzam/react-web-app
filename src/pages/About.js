import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
const About = () => {
    document.title ="Startup - About";
    return (
        <>
       <section className="about-us-conn">
           <div className="in-touch"></div>
       <AboutUs />  
       </section>
        </>
    )
}

export default About;
