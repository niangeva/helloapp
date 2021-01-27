import React, {useState} from 'react';

import BoxRoutine from './Box/BoxRoutine';
import BoxRecettes from './Box/BoxRecettes';
import BoxConseils from './Box/BoxConseils';
import BoxProduits from './Box/BoxProduits';
import Header from '../Header';
import Main from '../Wrapper/Main';

import './Home.css';
import {   useParams
} from "react-router-dom";
import Swiper from '../Swiper';
import Accordion from './Accordion'


const Home = () =>  {
  
  const {firstname} = useParams();

  const [clicked, setClicked] = useState(false);
  
  const toggle = index =>{
    if (clicked === index){
      return setClicked(null)
    }
    setClicked(index)
  }

  const data = [
    {
     
      title: 'Conseils', 
      className: 'conseils-tab', 
      link: '/Conseils', 
      small: 'Découvrez tous les conseils pour entretenir vos cheveux',
      more: 'Plus de conseils',
      children: <BoxConseils/>
    },

    {
      title: 'Produits', 
      className: 'produits-tab', 
      link: '/Produits', 
      small: 'Découvrez tous les conseils pour entretenir vos cheveux',
      more: 'Voir plus',
      children: <BoxProduits/>
    },

    {
      title: 'Recettes', 
      className: 'recettes-tab', 
      link: '/Recettes', 
      small: 'Les produits fait maison',
      more: 'Plis de recettes',
      children: <BoxRecettes/>
    },

    {
      title: 'Routine', 
      className: 'routine-tab', 
      link: '/User/awa', 
      small: 'Votre routine capillaire',
      more: 'Modifier Ma routine',
      children: <BoxRoutine/>
    }
  ]

  
    return (
      
      <div className="page Home">
        <Header title="Bonjour," username={firstname}>
            In nimia in agitationibus summum species sudant solito longiores.
        </Header>
       
        <Main >
        <div className="home">
            <div className="news-container">
              <div className="news-bg"></div>
                      
              <div className="news-wrap">
                <h1>Conseil du jour</h1>
                <div className=" news-content"  id="news-carousel">
                  <Swiper/>
                </div>
                  
              </div>
            </div>

            <div className="tabcontainer">
              {data.map((item, index) =>{ 
                return(
                  <Accordion 
                  key={index} title={item.title} className={item.className} 
                  onClick={()=> toggle(index)} link={item.link}
                   more="Voir plus" small={item.small} clicked={clicked} index={index} >
                   {item.children}
                  </Accordion>
                )
              })}
                  
            </div>
          </div>
        </Main>
          
      </div>
       
    );
 
  
}

export default Home;
