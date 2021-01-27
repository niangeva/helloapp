import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({title, background, link}) => {
    return (
        <article className="post-box">
            <div className="post-entry">
                
                <div className="post-thumbnail" >
                    <Link to={link} className="post-link">
                        <img src={background} style={ styles.card}/>
                    </Link>
                </div>
                                                        
            
                <h2><Link to={link}>{ title }</Link></h2>
                
                <i className="fas fa-plus-circle"></i> 
            </div>                    
        </article>  
           
    )
}
 const styles = {
     card: {
        width: '300px',
        height: '200px',
        borderSizing: 'border-box',
        fontSize: '2.5em',
        color: 'white',
        objectFit: 'cover'
     },
     card_number:{
         position: 'absolute',
         top: '2px',
         left: '2px'
     }


 }

export default Card;
