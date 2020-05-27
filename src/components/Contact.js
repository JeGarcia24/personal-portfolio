import React from 'react';
import './Contact.css';

import contact from '../images/contact.svg'

const Contact = () => {
    return(
        <div className="contact">
          <div className="contact-content">
            <img className="contact-image" src={contact} alt="contact me" />
            <h1 className="catch-phrase">Let's create something awesome!</h1>
            <h3 className="freelance-line">I'm currently available for freelance or fulltime work.</h3>
            <p>If you have a project and think I can help, or just want to say hi, please feel free to drop me a message.</p>
            <a className="messageLink" href="mailto:jeralyn.garcia@yahoo.com">Let's get in touch</a>
          </div>
          <footer>
            <div className="footer-content">
              <a className="github" href="https://github.com/JeGarcia24" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i>Github</a>
              <div className="copyright">© 2020 <a href="jeralyngarcia.com">Jeralyn Garcia</a>. All rights reserved</div>
            </div>
          </footer>
      </div>

    );
}

export default Contact;

