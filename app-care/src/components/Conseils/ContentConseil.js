import React from 'react';

import {
  Link
} from "react-router-dom";
import Marker from '../Marker';

const ContentConseil = ({children, background, jour, mois, alt}) => {
    return (
        
        <article className="post-box">
            <div className="post-entry">
                <div href="" className="post-link">
                    <div className="post-thumbnail" >
                        <img src={background} style={ styles.card} alt={alt}/>
                        <div className="post-cover"></div>
                    </div>
                </div>                                            
                <h2>{ children}</h2>
                
                <div className="metaData">
                    <div className="date"><p className="publi-jour">{jour}</p><p className="publi-mois"> {mois}</p></div>
                </div>
                
                <Marker/>
            </div>                    
        </article>  
      
        
           
    )
}
const styles = {
    card: {
        objectFit: 'cover',
        width:' 100%',
        height: 'inherit',
        position: 'relative',
        borderRadius: '5% 95% 5% 95% / 77% 21% 79% 23%'
    }
}
export default ContentConseil;
