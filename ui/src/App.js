import React, { Component } from "react";
import firebase from "firebase";

import "./App.css";

import Lan from "./components/landing/Lan";
import ContainerApp from "./container/ContainerApp";
import { Container } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    // Cada vez que el método 'onAuthStateChanged' se dispara, recibe un objeto (user)
    // Lo que hacemos es actualizar el estado con el contenido de ese objeto.
    // Si el usuario se ha autenticado, el objeto tiene información.
    // Si no, el usuario es 'null'
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    if (!this.state.user) {
      return <Lan />;
    } else {
      return <ContainerApp/>;
    }
}
}

export default App;
