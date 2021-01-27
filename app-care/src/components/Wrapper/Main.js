import React from 'react';

const Main = (props) => {
 
    return (        
        <div id="main" className="main">
            <div  className="page-wrap">
                <div className="page-container clearfix">
                    {props.children}
                </div>
            </div>
            
        </div>           
    )
}

export default Main;
