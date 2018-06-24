import React, { Component } from 'react'
import { Row, Table } from 'reactstrap'

class IndexDetail extends Component {
  render() {
    return (
      <Row className="index-item">
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Simbolo</th>
              <th>Dato </th>
              <th>Otro Dato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Champions top 100</td>
              <td>Ch100</td>
              <td>llenar dato</td>
              <td>otro dato</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Mundial 100</td>
              <td>Ch</td>
              <td>llenar dato</td>
              <td>otro dato</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tenis 100</td>
              <td>ATP 100</td>
              <td>llenar dato</td>
              <td>otro dato</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tenis 200</td>
              <td>ATP 200</td>
              <td>llenar dato</td>
              <td>otro dato</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    )
  }
}

export default IndexDetail