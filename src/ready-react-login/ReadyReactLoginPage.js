import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import './ReadyReactLoginPage.css';

class ReadyReactLoginPage extends Component {
  render() {
    return (
      <div className="ReadyReactLoginPage">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
        <Row>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            <form>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl type="text" placeholder="Email"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl type="password" placeholder="Password"/>
                </InputGroup>
              </FormGroup>
            </form>
          </Col>
          <Col xs={12} md={4}></Col>
        </Row>
      </div>
    );
  }
}

export default ReadyReactLoginPage;
