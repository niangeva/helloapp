import React from 'react';
import ImagePP from '../../../images/20191116_171951.jpg'

import { ReactComponent as Parametres }   from '../../../images/icons/setting.svg';
import { ReactComponent as Logout }   from '../../../images/icons/logout.svg';


import { SideDrawerDataTop, SideDrawerDataMiddle } from './SideDrawerData'
import { NavLink } from "react-router-dom";


import './SideDrawer.css';


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
       
      <nav className={drawerClasses}>
        <div id="mySidebar" className="sidebar">
        <div className="sidebarBg">
                
                
                    <div className="pp-container">
                        <img src={ImagePP} alt=""/>
                        <NavLink activeClassName="currentPage" to="/Profile"><i className="fas fa-user-edit"></i> Modifier le profil</NavLink>
                    </div>
                    <div className="sidenav-top nav-items-group">
                        {SideDrawerDataTop.map((val, key )=>{
                            return (
                                <button 
                                key={key} className={`menu-item + ${val.classname}`} 
                                onClick={() => {window.location.pathname = val.link}} 
                                >
                                    
                                    <span className={val.iconClass} >{val.icon}</span>{val.title}
                                   
                                </button>
                            )
                    })}
                        
                    </div>
    
                    <div className="sidenav-middle nav-items-group">
                    {SideDrawerDataMiddle.map((val, key )=>{
                            return (
                                <button key={key} className={`menu-item + ${val.classname}`} 
                                onClick={() => {window.location.pathname = val.link}}>
                                   
                                    <span className={val.iconClass} >{val.icon}</span>{val.title}
                                    
                                </button>
                            )
                    })}
                    </div>   
                        
                    <div className="sidenav-bottom nav-items-group">
                        <button className="menu-item settin-sidebar"><NavLink activeClassName="currentPage" to="/Parametres"><span className="icon-settin"><Parametres/></span>Paramètres</NavLink></button>
                        <button className="menu-item lgout-sidebar"><NavLink to="/"><span className="icon-lgout"><Logout /></span>Déconnexion</NavLink></button>
                    </div>
                                    
                </div>          
        </div>
      </nav>
    );

  
}

export default SideDrawer ;
