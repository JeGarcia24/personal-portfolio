import React from 'react';
import './About.css';

import me from '../images/me.svg';
import language from '../images/language.svg';

const About = () => {
    return(
        <div className="about">
          <h1 className="title-page">About me</h1>
          <div className="about-container">
            <div className="left">
              <img className="me" src={me} alt="svg" />
              <p className="greetings">Oh, hello! nice to meet you.</p>
              <p>I'm a self-taught front-end developer from the Philippines!</p>
              <p>My passion for problem-solving and web development 
              encouraged me to make a career change from Electronics Engineer 
              to Front-end Developer.</p>
            </div>
            <div className="right">
              <h2 className="right-title">What I can do </h2>
              <span>is to develop what you need using languages such as <h3>HTML, CSS, and Javascript</h3>
                <img className="language" src={language} alt="svg-language" /></span>
              <span>And to make websites and web app awesome, 
                I use Javascript libraries such as <h3>Bootstrap, jQuery, React, and Redux</h3>
              </span>
            </div>
          </div>
      </div>

    );
}

export default About;