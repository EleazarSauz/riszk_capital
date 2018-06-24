import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import MainApp from '../../components/MainApp/MainApp'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainApp />
      </div>
    );
  }
}

export default App;
