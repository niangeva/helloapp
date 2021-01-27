import React from 'react';
import { ReactComponent as HomeBtn }   from '../../images/icons/home.svg';
import { NavLink } from "react-router-dom";
import { FaMagic, FaMortarPestle, FaThList, FaUser} from 'react-icons/fa'

export default function FooterNav (){
      return (

        <ul className="navbar">                       
            <li className="navlink">
                <NavLink activeClassName="currentTab " to={
                    {
                        pathname: "/Conseils",
                        state:{
                            from: 'root'

                        }
                    }
                }>
                    {/*<i className="fas fa-clipboard-list"> </i>*/} <FaThList/> <br/> 
                    <h4>Conseils</h4>
                </NavLink>
            </li>

            <li  className="navlink">
                <NavLink activeClassName="currentTab" to={'/Produits'}>
                    <FaMagic/> <br/>
                    <h4>Produits</h4>
                </NavLink>
            </li>

            <li  className="navlink">
                <NavLink  activeClassName="currentTab" to={'/Home/awa'}> 
                <HomeBtn/><br/>
                    <h4>Home</h4>
                </NavLink>
            </li>

            <li  className="navlink">
                <NavLink activeClassName="currentTab" to={'/Recettes'}>
                    <FaMortarPestle/><br/> 
                    <h4>Recettes</h4>
                </NavLink>
            </li>

            <li  className="navlink">
                <NavLink  activeClassName="currentTab" to={'/User/awa'}>
                   <FaUser/> <br/>
                    <h4>Compte</h4>
                </NavLink>
            </li>
        
        </ul> 
        
      )
       
}


