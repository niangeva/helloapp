import React from 'react'
import { ReactComponent as HomeBtn }   from '../../../images/icons/home.svg';
import { ReactComponent as Calendar }   from '../../../images/icons/agenda.svg';
import { ReactComponent as User }   from '../../../images/icons/account-thin.svg';
import { ReactComponent as Help }   from '../../../images/icons/help.svg';
import { ReactComponent as Cadenas }   from '../../../images/icons/cadenas.svg';
import { ReactComponent as Parametres }   from '../../../images/icons/setting.svg';
import { ReactComponent as Logout }   from '../../../images/icons/logout.svg';
import  Apropos    from '../../../images/icons/about.png';


export const SideDrawerDataTop = [
    {
        title: "Home",
        icon: <HomeBtn/>,
        iconClass: 'icon-home',
        link: "/Home/awa", 
        classname: 'accueil-sidebar'
    },
    {
        title: "Agenda",
        icon: <Calendar/>,
        iconClass: 'icon-calendar',
        link: "/Agenda",
        classname: "agenda-sidebar"
    },
]
export const SideDrawerDataMiddle = [
        {
        title: "Contact",
        icon: <User/>,
        iconClass: 'icon-ctc',
        link: "/Contact",
        classname: "ctc-sidebar",
    },
    {
        title: "A propos",
        icon: <img src={Apropos}/>,
        iconClass: 'icon-about',
        link: "/About",
        classname: "about-sidebar"
    },
    {
        title: "Terms et Conditions",
        icon: <Cadenas/>,
        link: "/Confidentialites",
        iconClass: 'icon-secu',
        classname: "secu-sidebar"
    },
    {
        title: "Aide",
        icon: <Help/>,
        iconClass: 'icon-help',
        link: "/Aide",
        classname: "help-sidebar"
    }
] 

export const SideDrawerDataBottom = [
    {
        title: "Parametres",
        icon: <Parametres/>,
        iconClass: 'icon-settin',
        link: "/Parametres",
        classname: "settin-sidebar"
    },
    

]
    

