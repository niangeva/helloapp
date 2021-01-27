import React from 'react';

  
  const CatRecettes = ({title, children, classname}) => {
      return (
        <div className={`recipe-cat clearfix ${classname}`}> 
            <h1>{title}</h1>
            <div className="recipe-container clearfix">
                {children}
            </div>
        </div>
             
      )
  }
  
  export default CatRecettes;