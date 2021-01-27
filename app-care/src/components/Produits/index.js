import React, {Component } from 'react';





import LeShampooing from './ProductsPages/LeShampooing';
import LaCreme from './ProductsPages/LaCreme';
import LeConditioner from './ProductsPages/LeConditioner';
import LeCoiffant from './ProductsPages/LeCoiffant';
import LeMasque from './ProductsPages/LeMasque';
import LesActifs from './ProductsPages/LesActifs';
import LesHE from './ProductsPages/LesHE';
import LesHuiles from './ProductsPages/LesHuiles';
import LesPoudres from './ProductsPages/LesPoudres';
import LeLeavin from './ProductsPages/LeLeavin';
import Produits from './ProduitsParent';
import HydratantsVsProteines from './ProductsPages/HydratantsVsProteines';
import AEviter from './ProductsPages/AEviter';

import './Produits.css';

import {    BrowserRouter as Router, Switch, Route, withRouter
} from "react-router-dom";
import ScrollToTop from '../../App/ScrollToTop';


class ProduitsPage extends Component {

  
    render() {
         
      
      return (
      

          <Route render={({location}) => (

           <div className="produits page">
               
                  <Switch location={location}>
                    <ScrollToTop>
                          <Route path="/Produits"  exact component={Produits} />
                          <Route path="/LeShampooing"  component={LeShampooing} />
                          <Route path="/LeCoiffant"  component={LeCoiffant} />
                          <Route path="/LeConditioner"  component={LeConditioner} />
                          <Route path="/LeLeavin"  component={LeLeavin} />
                          <Route path="/LeMasque"  component={LeMasque} />
                          <Route path="/LesActifs"  component={LesActifs} />
                          <Route path="/LesHE"  component={LesHE} />
                          <Route path="/LesHuiles"  component={LesHuiles} />
                          <Route path="/LaCreme"  component={LaCreme} />
                          <Route path="/LesPoudres"  component={LesPoudres} />
                          <Route path="/HydratantsVsProteines"  component={HydratantsVsProteines} />
                          <Route path="/AEviter"  component={AEviter} />
                      </ScrollToTop>
                  </Switch>
                
                  </div>
          ) }/>
        
      );
    }
  }
  
  export default withRouter(ProduitsPage);




