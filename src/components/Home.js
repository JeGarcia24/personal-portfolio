import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(
        <div className="home">
          <div className="myInfoContainer">
            <div className="welcome">I'm <div className="myName">Jeralyn Garcia</div></div>
            <h2 className="job">Front-end Web Developer</h2>
            <Link className="portfolio-button" to="/portfolio">Portfolio</Link>
          </div>
        </div>

    );
}

export default Home;

