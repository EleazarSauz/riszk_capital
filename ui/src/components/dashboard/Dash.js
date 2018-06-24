import React, { Component } from "react";
import firebase from "firebase";

class Dash extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  render() {
    return (
      <div className="App-intro">
        
        <button onClick={this.handleLogout} className="App-btn">
          Salir
        </button>
      </div>
    );
  }
}

export default Dash;