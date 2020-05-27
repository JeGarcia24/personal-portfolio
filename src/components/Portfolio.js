import React from 'react';
import './Portfolio.css';

// import photos
import landingPage from '../images/preview-landing-page.jpg';
import ecom from '../images/preview-ecom.jpg';
import game from '../images/preview-game.jpg';
import todo from '../images/preview-todo.jpg';
import pomodoro from '../images/preview-pomodoro.jpg';
import drumMachine from '../images/preview-drum-machine.jpg';


const Portfolio = () => {
    return(
        <div className="portfolio">
          <h1 className="title-page">Portfolio</h1>
          <div className="projectContainer">
            <div className="projects">
              <div className="imageContainer">
                <img className="project-image" src={landingPage} alt="website-preview" />
                <span className="projectDescription" id="easybankProject">This website design is a challenge by 
                  <span> 
                    <a className="source" href="https://www.frontendmentor.io/challenges" target="_blank" rel="noopener noreferrer"> Frontend Mentor </a>
                  </span>
                  in which I created code. 
                  Used HTML, CSS, Javascript for responsive navbar animation, Bootstrap and jQuery for modal, 
                  fontAwesome for social media icons. This is mobile responsive.
                  <div className="descriptionLink">
                  <a className="projectLink" href="https://jegarcia24.github.io/easybank-landing-page/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                </div>
                </span>
              </div>
              <p className="projectTitle">Landing Page</p>
            </div>
            <div className="projects">
              <div className="imageContainer">
                <img className="project-image" src={ecom} alt="website-preview" />
                <span className="projectDescription">Front-end E-Commerce website. 
                I created the web design and develop the code, but the photos are not mine.
                Used HTML, CSS, Bootstrap, React Javascript, 
                and Redux. This is mobile responsive.
                <div className="descriptionLink"> 
                  <a className="projectLink" href="https://jegarcia24.github.io/ecommerce-bakeshop/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                </div>
                </span>
              </div>
                <p className="projectTitle">React/Redux E-Commerce Website</p>
            </div>
            <div className="projects">
              <div className="imageContainer">
                <img className="project-image" src={todo} alt="website-preview" />
                <span className="projectDescription" id="toDoListProject">To-Do List application with time, date, day, and 
                  a quote generator that shuffles quote every 30 seconds.
                  Used HTML, CSS, jQuery and bootstrap for Javascript functions, 
                  fontAwesome for quote sign. This is mobile responsive.
                  <div className="descriptionLink">
                    <a className="projectLink" href="https://jegarcia24.github.io/to-do-list/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </div>
                </span>
              </div>
                <p className="projectTitle">jQuery To-Do List</p>
            </div>
            <div className="projects">
              <div className="imageContainer">
                <img className="project-image" src={pomodoro} alt="website-preview" />
                <span className="projectDescription">This is productivity timer with audio 
                    warning when changing timer state. Used HTML, CSS, React Javascript, 
                    fontAwesome, and Bootstrap. This is mobile responsive.
                  <div className="descriptionLink">
                    <a className="projectLink" href="https://jegarcia24.github.io/pomodoro-clock/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </div>
                </span>
              </div>
                <p className="projectTitle">React - Pomodoro Clock</p>
            </div>
            <div className="projects">
              <div className="imageContainer">
                <img className="project-image" src={game} alt="website-preview" />
                <span className="projectDescription">Rock-paper-scrissors game with hand shake animation, 
                  score game, and reset game button. Used HTML, CSS, 
                  Javascript for functions, Bootstrap and jQuery for modal.
                  This is mobile responsive.
                  <div className="descriptionLink"> 
                    <a className="projectLink" href="https://jegarcia24.github.io/rock-paper-scissors_game/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </div>
                </span>
              </div>
                <p className="projectTitle">JavaScript Game</p>
            </div>
            <div className="projects">
              <div className="imageContainer">
                <img className="project-image" src={drumMachine} alt="website-preview" />
                <span className="projectDescription">Each key contains audio clip and displays instrument's name. 
                  It has keycodes for keyboard access.
                  Used HTML, CSS, React Javascript, and Bootstrap for styles.
                  This is mobile responsive.
                  <div className="descriptionLink"> 
                    <a className="projectLink" href="https://jegarcia24.github.io/drum-machine/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </div>
                </span>
              </div>
                <p className="projectTitle">React - Drum Machine</p>
            </div>
        </div>
      </div>

    );
}

export default Portfolio;