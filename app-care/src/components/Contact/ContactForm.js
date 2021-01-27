import React from 'react';

class ContactForm extends React.Component {
    /* DANS NOTRE CLASS */
    
    constructor(props) {
      super(props);
      this.state = {name: '', message: '', email: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(key) {
      return function (e) {
          var state = {};
          state[key] = e.target.value;
          this.setState(state);
      }.bind(this);
    }
    
    handleSubmit(event) {
      var data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      }
      /* BEGIN POST DATAS TO PHP */
          
      /* END POST DATAS TO PHP */
      event.preventDefault();
    }
    
      render() {
    return (
       
                <form onSubmit={this.handleSubmit}>
                    <div className="forms">
                        <div className="ctc-top-group">
                            <div className="contact-info clearfix">
                            <div className="form-group contact-box">
                                <label><i className="fas fa-user"></i> Nom <small className="star">*</small></label>
                                <input label ="Nom" type="text" className="form-control" placeholder="Votre nom" id="name" name="name" value={this.state.name} onChange={this.handleChange('name')} />
                                <div className="error">
                                    <small className="text-danger form-control-msg">Votre nom est obligatoire.</small>
                                </div>
                            </div>
                            <div className="form-group contact-box">
                                <label><i className="fas fa-at"></i> E-mail <small className="star">*</small></label>
                                <input type="text" className="form-control" placeholder="Votre email" id="email" name="email" value={this.state.email} onChange={this.handleChange('email')}/>
                                <div className="error">
                                    <small className="text-danger form-control-msg">Votre email est obligatoire.</small>
                                </div>
                            </div>                               
                            </div>
                            <div className="form-group textarea clearfix">
                                <label><i className="fas fa-pencil-alt"></i> Message <small className="star"><b> * </b></small></label>
                                <textarea name="message" id="message" className="form-control" rows="20" cols="30" placeholder="Votre Message" type="text" value={this.state.message} onChange={this.handleChange('message')}  />
                                
                                <div className="error">
                                    <small className="text-danger form-control-msg">Un message est obligatoire.</small>
                                </div>
                            </div>
                        </div>
                        <div className="ctc-bottom-group clearfix">
                            {/** 
                            <div className="recaptcha-group-form ">
                                <div className="g-recaptcha" data-sitekey="6Lf7JtUUAAAAAFx9MBBioXlKFn7RYiLdeonqgFWs"></div>
                            </div>*/}
                                
                            <div className="buttons "><input type="hidden" name="submitted" id="submitted" value="true" onClick={this.handleSubmit} /><button type="submit"><i className="fas fa-paper-plane"></i> Envoyer</button></div>
                        </div>
                        <small className="text-info form-control-msg js-form-submission">Envoi en cours, veuillez patienter ...</small>
                        <small className="text-success form-control-msg js-form-success">Votre message a été envoyé avec succès, merci!</small>
                        <small className="text-danger form-control-msg js-form-error">Un problème est survenu avec le formulaire de contact, veuillez réessayer!</small>
                    </div>
                    </form>         

    )
}
}


export default ContactForm


