import React from 'react';

import Image1 from '../../images/pics/soap.jpg';
import Image2 from '../../images/pics/masque.jpg';
import Image3 from '../../images/pics/conditioner.jpg';
import Image4 from '../../images/pics/oil-4262839_1920.jpg';
import Image5 from '../../images/pics/cosmetique-maison.jpg';
import Image6 from '../../images/pics/leavin.jpg';
import Image7 from '../../images/pics/plant-3368992.jpg';
import Image8 from '../../images/pics/essential-oils-2535840.jpg';
import Image9 from '../../images/pics/ginger-1191945.jpg';
import Image10 from '../../images/pics/natural-cosmetics-4004909.jpg';
import Image11 from '../../images/pics/cream-3496778_1920.jpg';
import Image12 from '../../images/pics/lab-217043_1280.jpg';


import Header from '../Header';
import ProduitsBoxes from './ProduitsBoxes';
import Main from '../Wrapper/Main'

import {
    Link
  } from "react-router-dom";

import  './Produits.css';
import Marker from '../Marker';
import  './Produits.css';




const ProduitsParent = () => {
   

    const datas = [
        {background: Image1, link: "LeShampooing", title: 'Le shampooing'},
        {background: Image2, link: 'LeMasque', title:'Le masque'},
        {background: Image3, link: "LeConditioner", title:'Le conditioner'},
        {background: Image4, link: "LesHuiles", title:'Les huiles et beurres'},
        {background: Image5, link: "LaCreme", title: 'La crème'},
        {background: Image6, link: "LeLeavin", title:'Le leavin'},
        {background: Image7, link: "LeCoiffant", title: 'Le coiffant'},
        {background: Image8, link: "LesHE", title: 'Les huiles essentielles'},
        {background: Image9, link: "LesPoudres", title: 'Les poudres'},
        {background: Image10, link: "LesActifs", title: 'Les actifs'},
        {background: Image11, link: "HydratantsVsProteines", title: 'Protéinés vs hydratants'},
        {background: Image12, link: "AEviter", title: 'à éviter'},
    ] 
    
    const content = datas.map((data, index) =>{
          return(
              <ProduitsBoxes 
              key={index} 
               background={data.background} 
               link={data.link} 
               title={data.title}>
              </ProduitsBoxes>
          )
      } )
    
    return (
        <div className="page-produits-wrapper">
            
            <Header title="Produits"></Header>
            <Main >
                <div className="page-produits"> 
                
                    <div className="produits-content article-container">
                        {content}
                    </div> 
                            
                </div>
            </Main>
            
            
        </div>
            

    )

}
export default ProduitsParent;
