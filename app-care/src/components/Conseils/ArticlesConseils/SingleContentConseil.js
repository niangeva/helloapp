import React from 'react';


import BackLink from '../../Back/BackLink';
import Marker from '../../Marker';
import NavBg from '../../Menu/Toolbar/NavBg';

const SingleContentConseil = ({children, background, title, categories, alt}) => {
    
    return (
        <div className="single-page-conseils  page">
                     
            <div className="rct-art-bg"></div>
            
            <div className="wrap-article single-conseils"> 
                <article>
                    <nav>
                        <BackLink/>
                        <NavBg><h1>{ title }</h1></NavBg>   
                    </nav>  
                    
                    <div className="post-image" style={ { backgroundImage: `url(${background})` }}>
                        
                        <img className="center" src={background} alt={alt}/>
                        
                        
                    </div> 
                    <div className="post-content">
                        <Marker/>
                        {/*<div className="post-meta clearfix" >
                            <div className="post-date" ></div>
                            
                             <div className="cat"><a href="">{categories}</a></div>
                             
                            
                        </div>*/}
                       
                        <div className="post-title"> <h1>{ title }</h1> </div>                                
                        { children } 
                    </div>              
                </article>
            </div>
                             
        
      
        
        </div>
    )
}

export default SingleContentConseil;
