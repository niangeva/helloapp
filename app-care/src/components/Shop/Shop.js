import React from 'react';

import Main from '../Wrapper/Main';
import { Link } from "react-router-dom";
import BackLink from '../Back/BackLink';

import './Shop.css';



const Shop = () => {
  
 
    
    return (
      <div className="Shop page">
         
        <Main >
            <div className='shop-page'>
              <header >
              <BackLink/>
                <h1>Shop</h1>
              </header>

              <div className="shop-content">

                
              </div>
            </div>
        </Main>
      </div>
    );
}
export default Shop;
