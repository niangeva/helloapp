import React from 'react';
import {
    
    Link,
   
  } from 'react-router-dom';


const UserBottom = (props) => {
   
    return (
        <div className="user-bottom">
            <ul>
                <li className="">
                    <Link  to={'/Aide'}>Aide d'utilisations</Link>
                </li>

                <li>
                    <Link  to={'/Confidentialites'}>Terms et conditions d'utilisations </Link>
                </li>

                
                <li>
                    <Link  to={'/Contact'}>Contact</Link>
                </li>

                <li>
                    <Link  to={'/Contact'}>Instagram</Link>
                </li>

                <li>
                    <Link  to={'/Contact'}>Facebook</Link>
                </li>
                
            </ul>
        </div>                    
     
    );
}

export default UserBottom;
