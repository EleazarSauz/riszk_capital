import React from 'react'
import { Jumbotron, Row } from 'reactstrap'
import './DashboardAccountBalance.css'

const DashboardAccountBalance = () => {
  return (
    <Row>
      <Jumbotron className="jumbotron-header">
        <h1 className="display-5">
          $9500.00
        </h1>
      </Jumbotron>
    </Row>
  )
}

export default DashboardAccountBalance