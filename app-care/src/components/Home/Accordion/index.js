import React from 'react'
import './Accordion.css';
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow }   from '../../../images/icons/right-white.svg';

const Accordion = ({title, active, clicked, index, link, children, className, more, small, onClick}) => {
    return (

    <div className="Accordion">
        <div className={`btn-box ${className}`}>
            <button className={clicked === index ? "accordion accordionHeading active" : "accordion accordionHeading" } onClick={onClick}> 
                <div className="accordion-bg"></div>
                {title}                                    
                <small className="box-infos">{small}</small>
            
        
                <span className="accordion-more">
                    {clicked === index ? <i className="fas fa-chevron-down"></i> : <Arrow/>}
                </span>                  
                <div className="accordionBtn-bkg"></div>  
            </button>
           
            {clicked === index ? ( 
                <div className= "accordionContent" >
                    <div className="panel">
                        
                            {children}
                        
                        <Link to={link} className="readmore">{more}</Link>
                    </div>
                </div>)  : null 
            }
        </div>
    </div>
    )
}

export default Accordion
