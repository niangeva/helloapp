import React from 'react';

import './DrawerToggleBtn.css';

const DrawerToggleBtn = (props) => {

    let drawerClasses = 'menu-button';
    if (props.closeBtn){
        drawerClasses = 'menu-button close-btn';
    }

    return (
        <button className={drawerClasses} onClick={props.click}>
                <span  className="icon-bar"></span>
        </button>
      

    
    );

  
}

export default DrawerToggleBtn ;
