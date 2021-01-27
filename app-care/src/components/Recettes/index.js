import React, { Component } from 'react';




import Chantilly from './SingleRecettes/RecetteChantilly';
import Shampooing from './SingleRecettes/RecetteShampoing';
import Recettes from './RecettesLink';

import './Recettes.css';

import {  BrowserRouter as Router, Switch, Route, withRouter
} from "react-router-dom";
import ScrollToTop from '../../App/ScrollToTop';




class RecettesPages extends Component {

  
  
    render() {
  
     
      
      return (
      
          <ScrollToTop>  
            <Route render={({location}) => (
              <div  className="recettes page">
                
                      <Switch location={location}>
                                                            
                          <Route exact path="/Recettes"  component={Recettes} />
                          <Route exact path="/Chantilly"  component={Chantilly} />
                          <Route  exact path="/Shampooing"  component={Shampooing} />     
                                                          
                      </Switch>
                </div>
            ) }/>
            </ScrollToTop> 
           
      );
    }
  }
  
  export default withRouter(RecettesPages);
