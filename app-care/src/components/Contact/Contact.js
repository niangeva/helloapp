import React from 'react';

import Main from '../Wrapper/Main';
import Header from '../Header';

import './Contact.css';
import ContactForm from './ContactForm';
import BackLink from '../Back/BackLink';
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  
  return (
    <div className="page Contact">
      <div className="contactPage-bg"></div>
      <div className="ombrage">
        <div className="flouAR">
           <BackLink/>
          <Header title="Contactez nous !"> </Header>
          <Main >
              <div className='contact-page'>
                <ContactForm/>
                <div className="contactBottom">
                  <h2>Suivez nous sur</h2>
                  <ul> 
                    <li><FaInstagram/> <Link to='/'>Instagram</Link></li>
                    <li><FaFacebookF/> <Link to='/'>Facebook</Link></li>
                    <li><FaYoutube/> <Link to='/'>Youtube</Link></li>
                  </ul>
                </div>

              </div>
              
              
          </Main>
        </div>
        
      </div>
    </div>
  );

}
export default Contact;
