import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type = 'text', placeholder, name, value, onChange, error, label, id, htmlFor }) => {
  let typeClassName = 'form-group';
  
typeClassName += ' ' + name  ;
  return(
    <div className={typeClassName}>
       <label htmlFor={htmlFor}>
       <input 
        className={error ? "form-control is-danger" :"form-control"  } 
        id={id}
        type={type} 
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}        
        autoComplete="off"
      /> {label}
       </label>
      
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onChange: PropTypes.func.isRequired
}

export default Input;