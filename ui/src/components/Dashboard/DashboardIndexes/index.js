import React, { Component } from 'react'
import { Row, Table } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class DashboardIndexes extends Component {
  render() {
    return (
      <Row>
        <h4>Indices</h4>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NavLink to="/indice">Tenis</NavLink>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Premier League</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Futbol</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>La ligue 1</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    )
  }
}

export default DashboardIndexes