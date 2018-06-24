import React, { Component } from 'react';
import firebase from "firebase";
import Navbar from '../../components/Navbar/Navbar'
import MainApp from '../../components/MainApp/MainApp'

class App extends Component {
  constructor(props) {
    super(props);

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
      <div>
        <Navbar logout={this.handleLogout}/>
        <MainApp />
      </div>
    );
  }
}

export default App;
