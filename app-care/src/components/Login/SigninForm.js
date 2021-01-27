import React, {Component} from 'react';

import { ReactComponent as ProfileIcon }   from '../../images/icons/at-solid.svg';
import { ReactComponent as CadenasIcon }   from '../../images/icons/cadenas.svg';
import InputField from './SignComponents/InputField';
import SubmitButton from './SignComponents/SubmitButton';
import { ReactComponent as LoginIcon}   from '../../images/icons/login.svg';
import PassOublie from './SignComponents/PassOublie';

class SigninForm extends Component {
/* constructor(props) {
      super(props);
      this.state = {  
          username:'',    
          password:'',
          buttonDisabled: false };
      
     
      
    }

   setInputValue(property, val){
       val = val.trim();
       if (val.length > 12){
           return;
       }
       this.setState({
           [property]: val
       })
   }
  resetFrom(){
      this.setState({
        username:'',    
        password:'',
        buttonDisabled: false 
      })
  }

  async doLogin(){
      if(!this.state.username){
          return;
      }
      this.setState({
          buttonDisabled: true
      })
      try{
          let res = await fetch('/login', {
              method: 'post',
              method: 'post',
              headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: this.state.username,    
                password:this.state.password
              })
          });
          let result = await res.json();
          if (result && result.success){
            UserStore.isLoggedIn = true;
            UserStore.username = result.username;
          }
          else if (result && result.success === false){
              this.resetFrom();
              alert(result.msg)
          }
      }

      catch(e){
        console.log(e);
        this.resetFrom();
      }
  }*/
  

 render(){
    return(
      <div className="base-container">
          <form className="sign-formgroup" /*onSubmit={this.handleSubmit}*/ >
            <div className="form-title"><h1>Connectez vous et mettez à jour votre routine !</h1></div>
                <div className="sign-box ">
                    <div className="form-group">
                        <ProfileIcon/>
                        <InputField 
                        type="email" 
                        placeholder="Email"
                        /*value='' this.state.username ? this.state.username: ''
                        onChange= /* (val) => this.setInputValue('username', val) */
                        />
                    </div>
                
            
                    <div className="form-group">
                        <CadenasIcon/>
                        <InputField 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Mot de passe"
                        /*value={this.state.password ? this.state.password : ''}
                        onChange= (val) => this.setInputValue('password', val) */
                        />

                        <div className="hidePW">
                            <i className="fas fa-eye-slash"></i>
                        </div>
                    </div>
                    
            
                
                </div>
                <div className="sign-footer">
                    <div className="submitButton">
                        <SubmitButton 
                            className="submit"
                            type="submit"
                            text="Valider"
                        /*disabled='' this.state.buttonDisabled onClick={ () => this.doLogin() */
                            > 
                            <LoginIcon/>  
                        </SubmitButton>  
                    </div>      
                    <PassOublie/>
                </div>
            </form>
            

      </div>

    )
  }
}
export default SigninForm

