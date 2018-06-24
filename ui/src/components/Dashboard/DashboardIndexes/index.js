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
              <th>Simbolo</th>
              <th>Indicador </th>
              <th>Otro Dato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NavLink to="/indice">Tenis</NavLink>
              </td>
              <td>Atp</td>
              <td>5.70</td>
              <td>otro dato</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Premier League</td>
              <td>Ch</td>
              <td>llenar dato</td>
              <td>otro dato</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Futbol</td>
              <td>ATP 100</td>
              <td>llenar dato</td>
              <td>otro dato</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>La ligue 1</td>
              <td>Ligue 1</td>
              <td>Indicador</td>
              <td>otro dato</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    )
  }
}

export default DashboardIndexes