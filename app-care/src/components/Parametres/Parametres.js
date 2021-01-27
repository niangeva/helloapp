import React from 'react';

import Main from '../Wrapper/Main'
import Header from '../Header';

import './Parametres.css';
import BackLink from '../Back/BackLink';

const Parametres = () => {
    
  return (
    <div className="page Parametres">
        
      <Header title="Paramètres">
        <BackLink />
      </Header>
      <Main >
          <div className='parametres-page'>
            
          </div>
      </Main>
    </div>
  );
}
export default Parametres;
