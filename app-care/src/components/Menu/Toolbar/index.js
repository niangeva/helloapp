import React, { useState} from 'react';
import DrawerToggleBtn from './DrawerToggleBtn';
import './Toolbar.css'
import ShopBtn from '../../Shop/ShopBtn';
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";


const Toolbar = (props) => {
    let toggleClasses = 'toolbar';
    if (props.closeBtn){
        toggleClasses = 'toolbar toolbar-active';
    }
    const [toolbar,setToolbar] = useState(false);
    
    const changeBackground = () => {
       
        if (window.scrollY >=80) {
            setToolbar(true);

        } else {
            setToolbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);

    const history = useHistory();

    const handleClick = () => {
        history.push("/Search");
      }

      const handleClickShop = () => {
        history.push("/Shop");
      }

    return (
        <div className={toggleClasses}>
            <div className={toolbar ? 'nav-bg nav-bg-active': 'nav-bg'} ></div> 
            <nav className='toolbar-nav '> 
                 <div className="toolbar-logo" href="/">Lovin<strong>My</strong><span>Hair</span> </div>

                <div className="spacer"></div>

                <div className="shoplink">
                    <button onClick={handleClickShop}>
                        <ShopBtn/>
                    </button>
                </div>   
                
                <div className="searchBtn">
                    <button onClick={handleClick}>
                        <FaSearch/>
                    </button>  
                </div>
               
                <div className='toggleBtn' >
                    <DrawerToggleBtn click={props.drawerToggleClickHandler} />
                </div>
              
            </nav>
        </div>
      
    );

  
}

export default Toolbar;
