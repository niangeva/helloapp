import React, {Component} from 'react';



class InputField extends Component {

  

    render(){
        
        return(
         
           <input 
                    className="form-control"
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    id={this.props.id}
                    value={this.props.value}
                    onChange={this.props.onChange} 
                    />
         
            
        );
    }
 
}

export default InputField;


