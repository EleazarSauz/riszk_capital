import React, { Component, Fragment } from 'react'
import DashboardAccountBalance from './DashboardAccountBalance'
import DashboardIndexes from './DashboardIndexes'
import { Row } from 'reactstrap'

class Dashboard extends Component {
  render() {
    return(
      <Fragment>
        <DashboardAccountBalance />
        <DashboardIndexes />
      </Fragment>
    )
  }
}

export default Dashboard