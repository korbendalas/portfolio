import React, { Component } from 'react';

class Kontakt extends Component {
  state={clicked:false};



onFormSubmit=(event)=>{
  event.preventDefault();

  this.setState({clicked:true});

}

form=()=>{
return(
  <div className="contact-container">

        <p className="form-text">
             Kontaktirajte me putem E mail-a u samo par koraka
        </p>

    <form onSubmit={this.onFormSubmit} className="contact-form">
        <input className="form-input" type="text" placeholder="Ime*" name="your-name" required/>
         <input className="form-input" type="text" placeholder="Prezime*" name="your-lastname" required/>
         <input className="form-input" type="text" placeholder="Email*" name="your-email" required/>
     
        <textarea className="text-area" name="your-message"  placeholder="Poruka*" required/>
        <input  type="submit" className="button submit" value="Submit"/>
    </form>

</div>

);

}

formSend =()=>{
return(
   <div className="contact-container">
          <div className="message-sent">
            <p>Email uspešno poslat!</p>
          </div>   
        
 </div>)
};

  render() {
    return (
      <div className="contact">
       {!this.state.clicked?this.form():this.formSend()}
       
       <div className="contact-container social-media">
            <h3>Nadjite me na društvenim mrežama</h3>
              <div className="media-icons">
                  <a href="https://github.com/korbendalas" target="_blank"><i className="fa fa-github"></i></a>
                  <a href="https://www.facebook.com/Paliborbre" target="_blank"> <i className="fa fa-facebook"></i> </a>
                  <a href='https://www.instagram.com/go.u.3.pm/' target="_blank"> <i className="fa fa-instagram"></i></a> 
              </div>
       </div>
      <div className="google-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.621387828801!2d20.914845415425535!3d43.98787877911129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47572058412d8a9d%3A0xe38d6e09a2304bba!2z0J7RgtC-0L3QsCDQltGD0L_QsNC90YfQuNGb0LAsINCa0YDQsNCz0YPRmNC10LLQsNGG!5e0!3m2!1ssr!2srs!4v1555279033775!5m2!1ssr!2srs" width="100%" height="450"  allowfullscreen></iframe>

      </div>

      </div>
    );
  }
}

export default Kontakt;