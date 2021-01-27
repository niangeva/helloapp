import React from 'react';

import Main from '../Wrapper/Main'
import UserPageBtn from './UserPageBtn'
import ProfileImg from '../../images/pics/blank-profile-picture.png';

import { ReactComponent as LogOut }   from '../../images/icons/logout.svg';

import {    useParams, useHistory
} from "react-router-dom";

import './User.css';
import UserBottom from './UserBottom';

const UserParent = (props) => {
   
    const {firstname} = useParams();

    const history = useHistory();

    const handleClick = () =>{
    history.push("/");
    }


    
    return (
        <div >
            <div className="user-page-container">

                <header className="app-header">
                    
                    <div className="header-bg">                
                        <div className="header-content">                
                            <h1>Mes réglages  
                                
                            </h1>
                            <div className="user-profile">
                                <strong className="username" >  
                                    {firstname}                      
                                </strong>   
                                <img src={ProfileImg} alt=""/>
                            </div>
                            <button className="logout-btn" onClick={handleClick}><span className="icon-lgout"><LogOut/></span><span>Deconnexion</span></button>            
                        </div>
                    </div>
                </header>  
                
                <Main >
                    <div className='user-page'>
                    
                        <UserPageBtn/>                        
                       <div className="carousel-box">
                   
                        </div>
                    <UserBottom/>
                    </div>
                
                </Main>   
                <div className="sidebar">
                    {props.children}
                </div>
            </div>
        </div>
    )
  
}

export default UserParent;