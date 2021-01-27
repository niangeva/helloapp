import React from 'react';



const SubmitButton = (props) => {

    
        return(
         
                <button 
                    type={props.type} 
                    className={props.className}     
                    disabled={props.disabled}
                    onClick={props.onClick}           
                    >
                        {props.children}
                     
                    {props.text}
                </button>
          
        )
   
 
}

export default SubmitButton;