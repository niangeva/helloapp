import React from 'react';

import Conseils from './ConseilsRoute';

import  './Conseils.css';

import ScrollToTop from '../../App/ScrollToTop';

import {    BrowserRouter as Router, Switch, Route, withRouter
} from "react-router-dom";


import Bases from './ArticlesConseils/Bases';
import Coiffures from './ArticlesConseils/Coiffures';
import Debuter from './ArticlesConseils/Debuter';
import Hygiene from './ArticlesConseils/Hygiene';
import LeCheveu from './ArticlesConseils/LeCheveu';
import Materiel from './ArticlesConseils/Materiel';
import TypesCheveux from './ArticlesConseils/LesTypesCheveux';
import Couper from './ArticlesConseils/Couper';
import TransitionBigchop from './ArticlesConseils/Bigchop';
import Colorations from './ArticlesConseils/Colorations';
import LovinHair from './ArticlesConseils/LovinHair';
import CuirChevelu from './ArticlesConseils/CuirChevelu';






class ConseilsPage extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location)
    };
  }
  
  UNSAFE_componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }
  
  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }*/
  
    render() {
    
      const timeout = { enter: 800, exit: 400 };
      
          
          return (
            
               
                 <ScrollToTop>
                  <Route render={({location}) => (

                    <div className="conseils page">
                          <Switch location={location}>
                            
                                <Route exact path="/Conseils" component={Conseils} />
                                <Route path="/Bases" component={Bases} />
                                <Route path="/LeCheveu" component={LeCheveu} />
                                <Route path="/TypesCheveux" component={TypesCheveux} />
                                <Route path="/Debuter" component={Debuter} />
                                <Route path="/Materiel" component={Materiel} />
                                <Route path="/Coiffures" component={Coiffures} />
                                <Route path="/Hygiene" component={Hygiene} />
                                <Route path="/Couper" component={Couper} />
                                <Route path="/Coiffures" component={Coiffures} />
                                <Route path="/TransitionBigchop" component={TransitionBigchop} />
                                <Route path="/Colorations" component={Colorations} />
                                <Route path="/LovinHair" component={LovinHair} />
                                <Route path="/CuirChevelu" component={CuirChevelu} />
                                
                          </Switch>
                        </div>
                  ) }/>
                  </ScrollToTop>
               
           
         
          );
        }
      }
      
      export default withRouter(ConseilsPage );
