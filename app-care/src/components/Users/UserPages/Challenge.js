import React from 'react';
import UserPage from './UserPage';
import HeaderUser from './HeaderUser';

const Challenge = () => {
    return (
        
        <UserPage classname="challenge">
            <HeaderUser title="Mes challenges"></HeaderUser>
              
            <div className="user-main">
                <div><button>Débuter un nouveau challenge</button></div>
                <button><i class="fas fa-plus-circle"></i></button>
                
            </div>
        </UserPage>
             
        
           
    )
}


export default Challenge;
