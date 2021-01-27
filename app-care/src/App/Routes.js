import React, {Component } from 'react';


import Wrapper from '../components/Wrapper/Wrapper';

import Home from '../components/Home';
import Conseils from '../components/Conseils';
import Produits from '../components/Produits';
import Recettes from '../components/Recettes';
import User from '../components/Users';
import Parametres from '../components/Parametres/Parametres';
import Aide from '../components/Aide/Aide';
import About from '../components/About/About';
import Confidentialites from '../components/Confidentialites/Confidentialites';
import Contact from '../components/Contact/Contact';
import Sign from '../components/Login';
import Shop from '../components/Shop/Shop';
import Search from '../components/Search/SearchPage';
import Welcome from "../components/Welcome";
import ErrorPage from "../components/Error";


import {   Route,  Switch
  } from "react-router-dom";


class Routes extends Component{
   
  render(){
   
    
    return (

        <Route render={({location}) => (

        <div className={`App-container ${location.pathname.split("/")[1]}` }>

                <Switch location={location}>
                    {/* Welcome Page */}
                    <Route exact path="/"  component={Welcome} />  
                    {/* Sign page */ }                     
                    <Route path="/Sign" component={Sign }/>
                    
                    
                    {/* App Page */}
                    <Route>
                      <Switch>
                        <Wrapper>
                          { /* Home */}
                          <Route path="/Home/:firstname"  exact component={Home} />

                          {/* Conseils */}
                          <Route>   
                            <Conseils/> 
                          </Route>
                          
                          { /* Recettes */}
                          <Route>
                            <Recettes/>
                          </Route>

                          {/* Produits */}
                          <Route  >
                            <Produits/>
                          </Route>

                        

                          {/* User */}
                          <Route >
                              <User/>
                          </Route>
                          {/* Sidebar */}
                                                        
                          <Route path="/About" component={About}  />
                          <Route path="/Parametres" component={Parametres}/>  
                          <Route path="/Aide" component={Aide}/>
                          <Route path="/Contact" component={Contact} />
                          <Route path="/Confidentialites"  component={Confidentialites} />

                          {/* Toolbar */}
                          <Route path="/Shop" component={Shop} />
                          <Route path="/Search" component={Search} />

                          {/* Error Page */}
                          

                        </Wrapper>
                        
                      </Switch>
                    </Route>

                </Switch>
                </div>
            
        ) }/>
  
    );

  }
  
  
}


export default Routes;
