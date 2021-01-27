import React, {useState, useContext} from 'react'
import Input from './SignComponents/Input';
import { ReactComponent as NextIcon }   from '../../images/icons/right-grey.svg';
import { Link } from 'react-router-dom'


const SignupFormNew = (props) => {

   
    
    const data = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    
    const [error, setError] = useState('');
    
    const handleChange = e => {
        setLoginData({
            ...loginData, 
            [e.target.id]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const { email, password} = loginData;
        
    }

    
    const { username, email, password, confirmPassword} = loginData;

    const btn = username === '' || email === '' || password === '' || password != confirmPassword
    ? <button type="button" disabled className="submit goNextStep">Suivant<NextIcon/></button>
    : <button type="button" className="submit goNextStep">Suivant<NextIcon/></button>

    const inputfields = [
        {id: 'username', value: 'username', type: 'text', placeholder: 'nom'},
        {id: 'email', value: 'email', type: 'email', placeholder: 'email'},
        {id: 'password', value: 'password', type: 'password', placeholder: 'Mot de passe'},
        {id: 'confirmPassword', value: 'confirmPassword', type: 'password', placeholder: 'Confirmer le mot de passe'},
      ];

    const errorMsg = error !== '' && <span>{error.message}</span>;
    
    return (
        <div className="base-container"> 
        <div className="form-title"><h1>Créez un compte et commencez votre routine !</h1></div>
        <form className="sign-formgroup" onSubmit={handleSubmit} >
            
           
            <div className="sign-box">
                {errorMsg}                   
                {inputfields.map((inputfield, val) => (
                    
                        <Input
                            className={inputfield.id}
                            type={inputfield.type} 
                            placeholder={inputfield.placeholder}
                            id={inputfield.id}
                            name={inputfield.id}
                            value={val.value}
                            onChange={handleChange} 
                            key={val}
                            htmlFor={inputfield.id}
                            
                        />
                ))}

            </div>

            <div className="sign-footer">           
                <div className="submitButton">
                    {btn}
                </div>

                <div className="redirect-signin">
                    <Link className="" to="/Sign">Déjà inscrit ? Connectez vous !</Link>
                </div>
            </div>
        </form>
    </div>
    )
}

export default SignupFormNew
