/* eslint-disable no-unused-vars */
import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
         I am very passionate about improving my coding skills & developing applications and
        websites. I design Websites and Webpages. Working for myself to improve my skills.
        Love learning and growing.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
          Lovely Professional University, Punjab
          <br/>
          B.Tech [CSE]
          <br/>
          2017-2021
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
         Technical Skills
        </h1>
        <span>
         Languages: JavaScript., React.js
         <br/>
         Technologies: HTML5, CSS3, Tailwind, Version Control System(Git,GitHub)
         <br/>
         Developer Tools : VS code Editor
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Web Developer solutions that exceed client expectations
          and contribute positively to the digital landscape. I am committed
          to continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
