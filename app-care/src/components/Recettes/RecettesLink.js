import React, { useState } from 'react';

import Main from '../Wrapper/Main'
import Header from '../Header';

import ContentRecette from './ContentRecette';
import CatRecettes from './CatRecettes';


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
import Image11 from '../../images/pics/spa-3587403_1920.jpg';
import Image12 from '../../images/pics/lab-217043_1280.jpg';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Controller, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Recettes() { 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const articles = [
    {background: Image1, title: 'Chantilly Karité', link: '/Chantilly'},
    {background: Image2, title: 'Masque aux poudres indiennes', link: '/Shampooing'},
    {background: Image3, title: 'Masque fortifiant', link: '/Chantilly'},
    {background: Image4, title: 'Masque fortifiant', link: '/Shampooing'},
    {background: Image5, title: 'Masque fortifiant', link: '/Chantilly'},
    {background: Image6, title: 'Masque fortifiant', link: '/Shampooing'},
    {background: Image7, title: 'Masque fortifiant', link: '/Chantilly'},
    {background: Image8, title: 'Masque fortifiant', link: '/Shampooing'},
    {background: Image9, title: 'Masque fortifiant', link: '/Chantilly'},
    {background: Image10, title: 'Masque fortifiant', link: '/Shampooing'},
    {background: Image11, title: 'Masque fortifiant', link: '/Chantilly'},
    {background: Image12, title: 'Masque fortifiant', link: '/Shampooing'}
    ]

    const masques = [
      
      {background: Image3, title: 'Masque fortifiant', link: '/Chantilly'},
      {background: Image4, title: 'Masque fortifiant', link: '/Shampooing'},
      {background: Image5, title: 'Masque fortifiant', link: '/Chantilly'},
      {background: Image6, title: 'Masque fortifiant', link: '/Shampooing'},
     
      ]
    const content = articles.map((article, index) =>{
        return(
            <SwiperSlide 
            key={index} 
            style={{listStyle:'none'}}
            tag="li" >
                
                <ContentRecette  background={article.background} link={article.link} >{article.title}</ContentRecette>
            </SwiperSlide>
        )
    } )

    const content2 = masques.map((masque, index) =>{
      return(
          <SwiperSlide 
          key={index} 
          style={{listStyle:'none'}}
          tag="li" >
              
              <ContentRecette  background={masque.background} link={masque.link} >{masque.title}</ContentRecette>
          </SwiperSlide>
      )
  } )

        return (
            <div className="page recettes">

               
                <Header title="Recettes"><p>In nimia in agitationibus summum species sudant solito longiores.</p></Header>
                <Main>
                    <div className="page-recettes">
                        <div className="recettes-content article-container clearfix">
                        
                            <CatRecettes classname="masques" title="Masques">
                                <Swiper 
                                breakpoints={{
                                   // when window width is >= 360px
                                   400: {
                                    width: 400,
                                    slidesPerView: 2,
                                  },
                                    // when window width is >= 640px
                                    640: {
                                      width: 640,
                                      slidesPerView: 3,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                      width: 768,
                                      slidesPerView: 4,
                                    },
                                  }}
                                    id="thumbs" 
                                    spaceBetween={0} 
                                    slidesPerView={2}
                                    onSwiper={setThumbsSwiper} 
                                    thumbs={{ swiper: thumbsSwiper }}
                                    tag="section" 
                                    wrapperTag="ul"  
                                    navigation 
                                    
                                    >
                                    {content2}
                                </Swiper>

                            </CatRecettes>
                            
                            <CatRecettes classname="cremes" title="Crèmes">
                            <Swiper
                               breakpoints={{
                                // when window width is >= 360px
                                400: {
                                 width: 400,
                                 slidesPerView: 2,
                               },
                                 // when window width is >= 640px
                                 640: {
                                   width: 640,
                                   slidesPerView: 3,
                                 },
                                 // when window width is >= 768px
                                 768: {
                                   width: 768,
                                   slidesPerView: 4,
                                 },
                               }}
                                 id="thumbs" 
                                 spaceBetween={0} 
                                 slidesPerView={2}
                                 onSwiper={setThumbsSwiper} 
                                 thumbs={{ swiper: thumbsSwiper }}
                                 tag="section" 
                                 wrapperTag="ul"  
                                 navigation 
                                    >
                                    {content}
                                </Swiper>
                            </CatRecettes>

                            <CatRecettes classname="huiles" title="Huiles">
                            <Swiper 
                               breakpoints={{
                                // when window width is >= 360px
                                360: {
                                 width: 360,
                                 slidesPerView: 3,
                               },
                                 // when window width is >= 640px
                                 640: {
                                   width: 640,
                                   slidesPerView: 4,
                                 },
                                 // when window width is >= 768px
                                 768: {
                                   width: 768,
                                   slidesPerView: 5,
                                 },
                               }}
                                    id="main"
                                    thumbs={{ swiper: thumbsSwiper }}
                                    controller={{ control: controlledSwiper }}
                                    tag="section" 
                                    wrapperTag="ul"  
                                    navigation                                    
                                    slidesPerView={3}
                                    spaceBetween={0} 
                                    
                                    >
                                    {content}
                                </Swiper>
                            </CatRecettes>
                            <CatRecettes classname="shampoing" title="Shampoing">
                            <Swiper 
                                breakpoints={{
                                  // when window width is >= 360px
                                  360: {
                                   width: 360,
                                   slidesPerView: 3,
                                 },
                                   // when window width is >= 640px
                                   640: {
                                     width: 640,
                                     slidesPerView: 4,
                                   },
                                   // when window width is >= 768px
                                   768: {
                                     width: 768,
                                     slidesPerView: 5,
                                   },
                                 }}
                                    id="main"
                                    thumbs={{ swiper: thumbsSwiper }}
                                    controller={{ control: controlledSwiper }}
                                    tag="section" 
                                    wrapperTag="ul"  
                                    navigation 
                                    spaceBetween={0} 
                                    slidesPerView={3}
                                    >
                                    {content}
                                </Swiper>
                            </CatRecettes>

                            
                        </div> 
                    </div>
                </Main>
                     
                
             
              </div>
                

        )
    

}
export default Recettes;
