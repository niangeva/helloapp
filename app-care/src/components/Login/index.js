import React, {useState} from 'react';
import Signin from './Signin';
import Signup from './Signup';
import './Sign.css';
import {  Link, useHistory } from "react-router-dom";

  function SignPage () {
    const [stateOnglets, setStateOnglests] = useState(1);

    const goSignin = () => {
      setStateOnglests(1);
    }
    const goSignup = () =>{
      setStateOnglests(2);
    }

    const history = useHistory();

    function handleClick() {
      history.push("/");
    }


    return (
     
      <div className="signPage clearfix" id="mySigninForm">
        <div className="signPage-bg"></div>
        <div className="ombrage">
          <div className="flouAR">   
            
            <div id="topNav" className="topNav">              
            <div id="BackBtn" className="BackBtn top-nav clearfix">
              <button className="arrow-back" onClick={handleClick}>
                <i className="fas fa-arrow-left"></i>
              </button>
            </div>
                
            </div>

            <div className="signContent">
                
              <div className="signPage-btn">
                  <div className="signbtns contBtn">                    
                      <button onClick={goSignin} className={`onglets signin-btn ${stateOnglets === 1 ? 'active' : ''}`} >Se connecter </button>
                      <button onClick={goSignup} className={`onglets signup-btn ${stateOnglets === 2 ? 'active' : ''}`}>S'inscrire</button>
                  </div>
              </div>
              <div className="sign-container">
                {stateOnglets === 1 ?
                <div id="signin-form" className="signform">
                    <Signin/>
                </div>
                :
                <div id="signup-form" className="signform">
                    <Signup/>
                </div>
                }
              </div>
                
            </div>
            <button className="skip-btn " >
               <div className="skip-link toplink"><Link to='/Home/awa'>S'enregistrer plus tard</Link></div>
            </button>
          </div>   
        </div>
      </div>

      
    );
 
  }
  
 
export default SignPage