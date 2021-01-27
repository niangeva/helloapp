import React from 'react';
import {
    Link
  } from 'react-router-dom';

import { FaSyncAlt, 
    FaChartLine, 
    FaCalendar, 
    FaRegStar, 
    FaRegImages, 
    FaRulerCombined,
    FaShoppingBasket,
    FaHourglassHalf,
    FaHeart,
    FaUserCog,
    FaBell,
    FaCog
 } from "react-icons/fa";




const UserPageBtn = (props) => {

    const userBoxes = [
        {title: 'Ma routine', link: '/Routine', icon: <FaSyncAlt/> , class: 'rtn-btn' },
        {title: 'Evolution', link: '/Evolution', icon:<FaChartLine/> , class: 'evl-btn' },
        {title: 'Mon agenda', link: '/Agenda', icon: <FaCalendar/>, class: 'cld-btn' },
        {title: 'Mes produits', link: '/MesProduits', icon: <FaRegStar/> , class: 'pdts-btn' },
        {title: 'Mes photos', link: '/Album', icon: <FaRegImages/>, class: 'pic-btn' },
        {title: ' Mes mesures ', link: '/Mesures', icon: <FaRulerCombined/>, class: 'msr-btn' },
        {title: 'Mes commandes', link: '/Commandes', icon: <FaShoppingBasket/>, class: 'cmd-btn' },
        {title: 'Mes Challenges', link: '/Challenge', icon: <FaHourglassHalf/>, class: 'chlg-btn' },
        {title: ' Mes favoris ', link: '/Favoris', icon: <FaHeart/>, class: 'fav-btn' },
        {title: 'Mon profil', link: '/Profile', icon: <FaUserCog/> , class: 'prfl-btn' },
        {title: 'Mon compte', link: '/Parametres', icon: <FaCog/> , class: 'cpte-btn' },
        {title: 'Mes notifications', link: '/Notifications', icon: <FaBell/> , class: 'not-btn' },
    ]
   
    return (
        <div className="user-boxes">
            <ul>

               

               
                {userBoxes.map((userBoxe, key) =>{
                    return(
                <li key={key}  className={userBoxe.class}>
                    <Link  to={userBoxe.link}>
                        <button>{userBoxe.icon} {userBoxe.title}</button>
                    </Link>
                </li>  )})}              
                
            </ul>
        </div>                      
     
    );
}

export default UserPageBtn;
