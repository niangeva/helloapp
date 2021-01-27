import React, {useRef}from 'react';
import {  useHistory } from "react-router-dom";


import './Welcome.css';

const Welcome = (props) =>{
  useRef(null)

  const history = useHistory();

    function handleClickSign() {
      history.push("/Sign");
    }
    function handleClickHome() {
      history.push("/Home/awa");
    }


  return(

    <div>
      <div className="page-wrap">

        <div className="index">
            <header className="App-header">
              <div className="ombrage"></div>
              
              <div className="wlc-box">
                  <h1>Bienvenue !</h1>
                  <p>Aimez vos cheveux et prenez en soin !</p>
              </div>   
            </header>
            
        </div> 

        <div className="home-btn clearfix">
          <div className="btn-bg cleafix">            
              <button className="signin-btn " onClick={handleClickSign}>
              Connexion
              </button>            
          </div>  
        </div> 

        <button className="skip-btn" onClick={handleClickHome}>
          <div className="skip-link toplink">S'enregistrer plus tard</div>
        </button>
        
      </div>

    </div>
  );
}
export default Welcome