import React from 'react';

import BackLink from '../../Back/BackLink';
import Marker from '../../Marker';
import NavBg from '../../Menu/Toolbar/NavBg';
import './SingleProduits.css';


const SingleContentProduct = ({children, background, title, classname, alt}) => {
    return (
       
        <div className="single-page-products page">
        
            <div className={`single-produit-wrapper ${classname}`}>    
                <div className="single-produit-content">                    
                    <div className="wrap-article single-produits"> 
                        <article>  
                            <nav>
                                <BackLink/>
                                <NavBg><h1>{ title }</h1></NavBg>   
                            </nav>     
                                    

                            <div className="post-image" style={{ backgroundImage: `url(${background})` }}>
                                <img className="center" src={background} style={styles.card} alt={alt} />                                
                            </div>
                            <div className="post-content">
                                <Marker/>
                                <div className="post-title"> <h1>{ title }</h1> </div>                                
                                <div className="content"> { children } </div>
                            </div>                   
                            
                        </article>
                        
                    </div>
                </div>         
            </div>    
        </div>           
    )
}
const styles = {
    card: {
        objectFit: 'cover',
        width:' 100%',
        height: 'inherit',
        position: 'relative'
       
    }

    
    
}
export default SingleContentProduct;
