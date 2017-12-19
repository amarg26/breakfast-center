import React, { Component } from "react";
import history from "../history.js";
import {
  Form,
  FormGroup,
  Row,
  FormControl,
  Col,
  Button,
  Grid
} from "react-bootstrap";

class ComponentWithFormOnly extends Component {
  render() {
    return (
      <Grid>
      <Row>
          <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
      <Form onSubmit={this.props.handleSubmit}>
      <FormGroup>
      <p>Welcome! Please enter you name to see menu card</p>
               
          <FormControl value={this.props.value} onChange={this.props.handleChange} required/>
       
          </FormGroup>
          <FormGroup>
        <Button
        bsStyle="primary" 
          type="submit"
          value="Submit" 
          className="enter"       
          onClick={() => history.push("/MenuCard")}
        >
        submit
        </Button>
         </FormGroup>
      </Form>
        </Col>
        </Row>
        </Grid>
    );
  }
}

export default ComponentWithFormOnly;
