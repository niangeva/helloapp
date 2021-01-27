import React from 'react';
import BackLink from '../../Back/BackLink.js';


const HeaderUser = ({title, children}) => {
    
    return (
       
        <div className="user-page-title">
            <BackLink/>
            <h1>{title}</h1>
            <nav>{children}</nav>
        </div>
    )
}


export default HeaderUser;
