import React from 'react';
import './Header.css';

const Header = (props) => {

    return (
        <header className="app-header">
            
            <div className="header-bg">                
                <div className="header-content">                
                    <h1>{props.title}  
                        <strong className="username" >  
                             {props.username}                                     
                        </strong>  
                    </h1>
                        {props.children}              
                </div>
            </div>
        </header>  
    
    );
  
}

export default Header;
