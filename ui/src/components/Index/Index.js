import React, { Component, Fragment } from 'react'
import IndexAbout from './IndexAbout/index'
import IndexChart from './IndexChart'
import IndexDetail from './IndexDetail/Index'
import IndexTrade from './IndexTrade/Index'
import './Index.css'
import { Row, Jumbotron, Col } from 'reactstrap'
import { WSAEINVALIDPROVIDER } from 'constants';

class Index extends Component {
  render() {
    return(
      <div className="index">
        <Row className="index-item">
          <Col>
            <h1 className="display-6">Tenis</h1>
          </Col>
        </Row>
        <IndexChart />
        <IndexAbout />
        <IndexDetail />
        <IndexTrade />
      </div>
    )
  }
}

export default Index