import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Index from '../Index/index'
import './Main.css'

class MainApp extends Component {
  render() {
    return(
      <main className="main-app">
        <Container className="content">
          <Switch>
            <Route path="/indice" component={Index}/>
            <Route path="/" exact component={Dashboard}/>
          </Switch>
        </Container>
      </main>
    )
  }
}

export default MainApp