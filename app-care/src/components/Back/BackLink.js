import React from 'react';
import { ReactComponent as BackLinkBtn }   from '../../images/icons/left-grey.svg';
import {
    useLocation, useHistory
  } from "react-router-dom";

import './BackLink.css'

const BackLink = (onClick) => {
  

  const location = useLocation();
  const history = useHistory();
  function goBackHandle(){
        history.goBack(location);
  }
    return (
        
        <div className="back" >
          
          <div className="backLink"><button onClick={goBackHandle}><BackLinkBtn/>Retour</button></div>
        </div>
          
    )
}


export default BackLink;
