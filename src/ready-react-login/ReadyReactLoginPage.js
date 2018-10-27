import React, { Component } from 'react';
import { Grid, FormGroup, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import './ReadyReactLoginPage.css';

class ReadyReactLoginPage extends Component {
  render() {
    return (
      <div className="ready-react-login-page">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"></link>
        <Grid>
          <Row className="margin-top-120">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
              <form>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Icon name='envelope'/></InputGroup.Addon>
                    <FormControl type="text" placeholder="Email"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><Icon name='user-lock'/></InputGroup.Addon>
                    <FormControl type="password" placeholder="Password"/>
                  </InputGroup>
                </FormGroup>
              </form>
            </Col>
            <Col xs={12} md={4}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ReadyReactLoginPage;
