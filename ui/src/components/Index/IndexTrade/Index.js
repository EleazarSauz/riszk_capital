import React, { Component } from 'react'
import { Row, Button, Card, CardTitle, CardBody, FormGroup, Input, Label} from 'reactstrap'
import './IndexTrade.css'

class IndexTrade extends Component {
  render() {
    return <div className="index-item--right">
        <Row className="index-trade">
          <Card body className="index-trade__card">
            <CardBody>
              <CardTitle>Comprar This</CardTitle>
              <FormGroup>
                <Label>Cantidad</Label>
                <Input placeholder="$100" />
              </FormGroup>
              <Button color="primary">Comprar</Button>
            </CardBody>
          </Card>
        </Row>
      </div>;
  }
}

export default IndexTrade