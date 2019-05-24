import React, { Component } from 'react';
import Typist from 'react-typist';


class Home extends Component {

  
  render() {
    return (
<div className="home">

   <div className="typewriter">

   <Typist cursor={{ hideWhenDone: true }}>
  <span> Zdravo. Ja sam Dalibor. </span>
  <Typist.Backspace count={9} delay={300} />
  <span className="ime-i-prezime"> Dalibor Petrić. </span>
  <Typist.Delay ms={300} />
  <br />
  <span>Ovo je moj portfolio sajt. </span>
</Typist>
  </div>   

</div>
   
    );
  }
}

export default Home;