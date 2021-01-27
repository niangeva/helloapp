import React, {Fragment, useState } from 'react';

import Spiruline from '../../images/118-Masque-naturel-spiruline-cheveux-6x4_1.jpg';
import Avocat from '../../images/masque-avocat-pour-cheveux1.png';
import Cream from '../../images/pics/cream-3368937.jpg';
import Banane from '../../images/masque-banane.jpg';
import Card from './Card'
import './MySwiper.css'

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Controller, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function MySwiper()  {

    const cards = [
        {background: Spiruline, title: 'Chantilly Karité', link: '/Chantilly' },
        {background: Avocat, title: 'Masque aux poudres indiennes', link: '/Shampooing'},
        {background: Cream, title: 'Masque fortifiant', link: '/Chantilly'},
        {background: Banane, title: 'Masque fortifiant', link: '/Shampooing'},    
        {background: Banane, title: 'Masque fortifiant', link: '/Shampooing'},
    ]

    const   slides = cards.map((card, index) => (
        <SwiperSlide 
        key={index} 
        style={{listStyle:'none'}}
        tag="li" >
            
            <Card 
            background={card.background}
            title={card.title}
            link={card.link}
            />

        </SwiperSlide>
    ))

    return (
        <Fragment>
            <div className="view-port" style={styles.view_port}>
                <div className="card-container" >
                    <Swiper 
                    breakpoints={{
                        // when window width is >= 400px
                        400: {
                         width: 400,
                        
                       },
                         // when window width is >= 600px
                         600: {
                           width: 600,
                          
                         },
                         // when window width is >= 800px
                         800: {
                           width: 800,
                          
                         },
                           // when window width is >= 1080px
                           1080: {
                            width: 1080,
                           
                          },
                         
                       }}
                       
                        id="main"
                        tag="section" 
                        wrapperTag="ul"  
                        pagination
                        navigation 
                        spaceBetween={0} 
                        slidesPerView={1}
                        onInit={(swiper) => console.log('Swiper initializing')}
                        onSlideChange={(swiper) => {
                            console.log('Slide index changed to: ', swiper.activeIndex)
                            
                        }}
                        onReachEnd={() => console.log('Swiper end reached')}
                        >
                            {slides}
                            
                    </Swiper>
                
                </div>
            </div>
    
        </Fragment>
    )   

}

const styles = {
    view_port : {
        overflow :'hidden',
        margin: '0 auto'
    },
   
    card_container: {
        display: 'flex',
        flexDirection: 'fit-content'

    }
}
export default MySwiper;
