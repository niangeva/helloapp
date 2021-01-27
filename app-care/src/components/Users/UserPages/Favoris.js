import React from 'react';
import UserPage from './UserPage';
import HeaderUser from './HeaderUser';

const Favoris = () => {
    return (
        
        <UserPage classname="favoris">
            <HeaderUser title="Mes favoris"></HeaderUser>
                
                <div className="user-main">
                    <div><button>Ajouter un favori</button></div>
                    <button><i class="fas fa-plus-circle"></i></button>
                </div>
                
        </UserPage>
        
           
    )
}


export default Favoris;
