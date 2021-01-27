import React from 'react';
import UserPage from './UserPage';
import HeaderUser from './HeaderUser';

const Agenda = () => {
    return (

        <UserPage classname="agenda">
            <HeaderUser title="Mon agenda"></HeaderUser>
            
            <div className="user-main">
                 Calendar
                 <button><i className="fas fa-plus-circle"></i></button>

            </div>
        </UserPage>
           
    )
}


export default Agenda;
