import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Dashboard from '../Dashboard'
import './Main.css'

class MainApp extends Component {
  render() {
    return(
      <main className="main-app">
        <Container className="content">
          <Dashboard />
        </Container>
      </main>
    )
  }
}

export default MainApp