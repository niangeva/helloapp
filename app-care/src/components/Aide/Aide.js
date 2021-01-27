import React from 'react';

import Main from '../Wrapper/Main';
import Header from '../Header';
import BackLink from '../Back/BackLink';
import './Aide.css';

const Aide = () => {


    
    return (
      <div className="page Aide">
          
        <Header title="Aide"> 
         <BackLink/>
        </Header>
        <Main >
            <div className='aide-page'>
              
            </div>
            
            
        </Main>
        
          
        
      </div>
    );

}
export default Aide;
