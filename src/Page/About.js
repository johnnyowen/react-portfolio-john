import React from "react";
import selfie from "../assets/images/seflieforport1.jpg"

const About = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <img src={selfie} alt="profile" className="img-fluid rounded-circle me-3" width="200"/>
        <p>
          Hello! My name is John Owen but I go by Johnny. This is a portfolio I built for myself using React! 
          I have been learning about full-stack web development in an online bootcamp I am taking through EdX.
          This portfolio links to other projects I have done throughout the course of the bootcamp. It is a showcase of what I have learned but is not everything I have done.
          I have also linked my github so you can check out everything I have worked on so far.
        </p>
      </div>
      <p>
        I wasn't always writing code, I was a chef for the first part of my working career. That path took me through 
        culinary school and even on to work in Scotttsdale, AZ, and the Ritz-Carlton in Tucson. However the schedule meant I couldn't be with my family 
        on nights and weekends, so I decided to make the switch to web development. I find this change fun and rewarding, and I have barely scratched the surface! Thanks for reading.
      </p>
    </>
  );
};

export default About;
