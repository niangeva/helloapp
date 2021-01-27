import React from 'react';
import UserPage from './UserPage';

import HeaderUser from './HeaderUser';

const Commandes = () => {
    return (
        <UserPage classname="commandes">
            <HeaderUser title="Mes commandes"></HeaderUser>
            
            <div className="user-main">
                <div><button>Ajouter un favori</button></div>
                <button><i class="fas fa-plus-circle"></i></button>
            </div>
            
        </UserPage>
        
        
        
           
    )
}


export default Commandes;
