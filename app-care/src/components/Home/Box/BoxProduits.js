import React, {useState} from 'react';


import Soap from '../../../images/pics/soap.jpg';
import Masque from '../../../images/pics/masque.jpg';
import Conditioner from '../../../images/pics/conditioner.jpg';
import Oil from '../../../images/pics/oil-4262839_1920.jpg';
import Image5 from '../../../images/pics/cosmetique-maison.jpg';
import Image6 from '../../../images/pics/leavin.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Controller, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import ProduitsBoxes from '../../Produits/ProduitsBoxes';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const BoxProduits = () => {

    const produits = [
        {background: Soap, link: "/LeShampooing", title: 'Le shampooing'},
        {background: Masque, link: '/LeMasque', title:'Le masque'},
        {background: Conditioner, link: "/LeConditioner", title:'Le conditioner'},
        {background: Oil, link: "/LesHuiles", title:'Les huiles et beurres'},
        {background: Image5, link: "LaCreme", title: 'La crème'},
        {background: Image6, link: "LeLeavin", title:'Le leavin'},
    ]
   
        const [thumbsSwiper, setThumbsSwiper] = useState(null);
  

    return (
        
      
                <div className="produits-content clearfix">
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
                              // when window width is >= 1080px
                              1070: {
                                width: 1070,
                                slidesPerView: 5,
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
                    {produits.map((produit, index) =>{
                        return(
                            <SwiperSlide 
                            key={index} 
                            style={{listStyle:'none'}}
                            tag="li" >
                              <ProduitsBoxes 
                              key={index} 
                              background={produit.background} link={produit.link} title={produit.title}>
                              </ProduitsBoxes>
                            </SwiperSlide>
                            
                        )
                    })}</Swiper>
                </div>
               
    )
}

export default BoxProduits
