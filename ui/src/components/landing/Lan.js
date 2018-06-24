import React, { Component } from "react";
import firebase from "firebase";

class Lan extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.handleAuth} className="App-btn">
        Iniciar sesión
      </button>
      </div>
    );
  }
}


export default Lan;