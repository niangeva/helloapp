import React from 'react';
import { useLocation, useHistory
  } from "react-router-dom";

  
import  './SingleRecette.css';
import { ReactComponent as BackLinkBtn }   from '../../../images/icons/left-grey.svg';
import Marker from '../../Marker';
import NavBg from 'components/Menu/Toolbar/NavBg';



const SingleRecette = ({children, background, title, recetteCat}) => {

    const location = useLocation();
    const history = useHistory();
    function goBackHandle(){
          history.goBack(location);
    }

    

    return (
                           
        <div className="single-page-recettes page">
                    
                   

        
            <div className="single-recette-wrapper">    
                     

                <div className="rct-art-bg" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="wrap-article single-recette"> 
                    
                    <article>

                        <nav>
                            <NavBg ><h1>{title}</h1> </NavBg> 
                            <div className="back">
                                <div className="backLink">
                                    <button onClick={goBackHandle}><BackLinkBtn/></button> 
                                </div>
                            </div>
                        </nav>
                        
                        <div className="post-image" style={{ backgroundImage: `url(${background})` }}>
                            <img className="center" src={background} alt="" />
                            
                        </div>
                        <div className="post-content">
                            <Marker/>
                            <div className="post-title"> <h1>{title}</h1> </div>    
                            <div className="post-meta clearfix" >
                                <div className="post-date" ></div>
                                <div className="cat">{recetteCat}</div>
                            </div>                            
                            <div className="content">
                                {children}
                            </div>                                                          
                        </div>        

                        <div className="rate" >
                            <i className="far fa-star"></i> Notez cette recette ! 
                        </div>
                        
                    </article>
                    </div>
            </div>
                
        </div>


    
 
           
    )
}

export default SingleRecette;