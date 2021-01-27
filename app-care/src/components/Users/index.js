import React, { Component } from 'react';

import './User.css';

import {   Switch, Route, withRouter
} from "react-router-dom";
import ScrollToTop from '../../App/ScrollToTop';

import Agenda from './UserPages/Agenda';
import Album from './UserPages/Album';
import Challenge from './UserPages/Challenge';
import MesProduits from './UserPages/MesProduits';
import Mesures from './UserPages/Mesures';
import Notifications from './UserPages/Notifications';
import Profile from './UserPages/Profile';
import Routine from './UserPages/Routine';
import Commandes from './UserPages/Commandes';
import Favoris from './UserPages/Favoris';
import User from './UserParent';
import Evolution from './UserPages/Evolution';




class UserPage extends Component {

  
  
    render() {
      
      const timeout = { enter: 800, exit: 400 };
      
      return (
        <Route render={({location}) => (

           
                <div className="user page left"
                 
                  
                >
               
                  <Switch location={location}>
                        <ScrollToTop>
                          <Route exact path="/User/:firstname"  component={User} />
                          <Route path="/Agenda"  component={Agenda} />
                          <Route path="/Album"  component={Album} />
                          <Route path="/Challenge"  component={Challenge} />
                          <Route path="/MesProduits"  component={MesProduits} />
                          <Route path="/Mesures"  component={Mesures} />
                          <Route path="/Notifications"  component={Notifications} />
                          <Route path="/Profile"  component={Profile} />
                          <Route path="/Routine"  component={Routine} />
                          <Route path="/Commandes"  component={Commandes} />
                          <Route path="/Favoris"  component={Favoris} />  
                          <Route path="/Evolution"  component={Evolution} />                         
                         
                         </ScrollToTop> 
                  </Switch>
                </div>
       
        ) }/>
         
      );
    }
  }
  
  export default withRouter(UserPage);




