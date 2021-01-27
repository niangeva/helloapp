import React from 'react';

import {
  Link,

} from "react-router-dom";
import Marker from '../Marker';

const ContentRecette = ({children, background, link, alt}) => {
    return (
            <article className="recette-box">
                
                <div className="recette-thumbnail" >
                    <img src={background} alt={alt}/>
                    <div className="post-cover"></div>
                </div>
                 


                <div className="post-title">
                    <h2 className="recette-title"> <Link  to={link}>{ children }</Link></h2>
                    <Marker/>
                </div>
                
            </article>
 
           
    )
}

export default ContentRecette;