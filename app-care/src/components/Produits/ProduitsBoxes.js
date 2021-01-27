import React from 'react';


import {
    Link
  } from "react-router-dom";


import Marker from '../Marker';


const ProduitsBoxes = ({title, background, link, alt}) => {
    
   
        return (
           <article className="produits-box" >
                <div className="pdt-cover">
                    <Link to={link}>
                        <div style={{background: `url(${background})`}} className="produits-thumbnail">
                           
                            <img  src={background} alt={alt}/>
                        </div>
                    </Link > <Marker/>
                    <div className="pdts-title">
                        <Link to={link}><h2>{title}</h2></Link>
                    </div>
                </div>
            </article>
        )
  

}
export default ProduitsBoxes;
