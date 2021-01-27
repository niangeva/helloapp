import React from 'react';


const UserPage = ({children, classname, header }) => {
   
    return (
        
        <div className={`single-user-page-container page  ${classname}`} >
            <div className="user-page-content">
                
                   {children}
                    
                
            </div>
        </div>
        
           
           
    )
}


export default UserPage;
