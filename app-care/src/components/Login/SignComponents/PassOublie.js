import React, {Component} from 'react';

function PwSetbox (){
    return <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <div id="mdp-form">
                        <form action="accueil.php" method="POST" className="form-container">
                            <h1>Mot de passe oublié ?</h1>
                
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Entrez votre Email" name="email" required/>
                
                            <button type="submit" className="btn">envoyer</button>
                        </form>
                    </div>
                    
                
                    
                </div>
            </div> ;
    }
    
    function PwLink (){
        return <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <div id="mdp-form">
                            <form action="accueil.php" method="POST" className="form-container">
                                <h1>Mot de passe oublié ?</h1>
                    
                                <label for="email"><b>Email</b></label>
                                <input type="text" placeholder="Entrez votre Email" name="email" required/>
                    
                                <button type="submit" className="btn">envoyer</button>
                            </form>
                        </div>
                        
                    
                        
                    </div>
                </div> ;
        }
    function ReponsePW(props) {
        const PWforgotten = props.PWforgotten;
        if (PWforgotten) {    
          return <PwSetbox />;  
        }  
        return <PwLink />;
      }
class PassOublie extends Component {

  

      passForgotten = () =>{
        alert ('mdp oublié');
      }

    render(){
        return(
            
            <div className="mdpnew">
                <button type="submit" onClick={this.passForgotten} id="myBtn">Mot de passe oublié ?</button>
            </div>
                   
        
               
        )
    }
 
}

export default PassOublie


