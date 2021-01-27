import React, {Fragment, useState } from 'react';
import {Link} from "react-router-dom";
import Spiruline from '../../../images/118-Masque-naturel-spiruline-cheveux-6x4_1.jpg';
import Avocat from '../../../images/masque-avocat-pour-cheveux1.png';
import Cream from '../../../images/pics/cream-3368937.jpg';
import Banane from '../../../images/masque-banane.jpg';


import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Controller, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const BoxRecettes = () => {


    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const articles = [
        {background: Spiruline, title: 'Chantilly Karité', link: '/Chantilly'},
        {background: Avocat, title: 'Masque aux poudres indiennes', link: '/Shampooing'},
        {background: Cream, title: 'Masque fortifiant', link: '/Chantilly'},
        {background: Banane, title: 'Masque fortifiant', link: '/Shampooing'},
        {background: Cream, title: 'Masque fortifiant', link: '/Chantilly'},
        {background: Banane, title: 'Masque fortifiant', link: '/Shampooing'},
    ]
    
    
    const content = articles.map((article, index) =>{
        return(
            <SwiperSlide 
            key={index} virtualIndex={index}
            style={{listStyle:'none'}}
            tag="li" >
                <article className="recette-box" key={index} >
                    
                        <div className="recette-image" style={{background: `url(${article.background})`}}>
                            <img className="center" src={article.background}/>
                            <div className="post-cover"></div>
                        </div>
                                                
                    <div className="post-title">
                        <h2 className="recette-title"><Link to={article.link}>{article.title}</Link></h2>
                        <button className="plus-btn"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></button>
                    </div>
                    
                </article>
            </SwiperSlide>
        )
    } )

    return (
       
        <div className="recettes-content clearfix">
            <Swiper 

                breakpoints={{
                   
                    // when window width is >= 480px
                    480: {
                    width: 480,
                    slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    768: {
                    width: 768,
                    slidesPerView: 5,
                    },
                    // when window width is >= 1080px
                    1070: {
                        width: 1070,
                        slidesPerView: 6,
                    },
                }}
                id="thumbs"
                thumbs={{ swiper: thumbsSwiper }}
                tag="section" 
                wrapperTag="ul"  
                navigation 
                spaceBetween={0} 
                slidesPerView={2}
                
             >
                 {content}
            </Swiper>
        </div>
    )
}

export default BoxRecettes

