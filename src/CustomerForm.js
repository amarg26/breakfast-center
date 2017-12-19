import React, { Component } from "react";
import history from "./history.js";

import { Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import MenuCard from "./components/MenuCard";
import ComponentWithFormOnly from "./components/ComponentWithFormOnly";

import {
  Row,
  Col,
  Grid
} from "react-bootstrap";

class CustomerForm extends Component {
  state = {
      value: ""
    };

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  handleSubmit =event => {

    if (this.state.value === "") {
      alert("please enter name");
    } else {
      alert("name was submitted: " + this.state.value);

      event.preventDefault();
    }
  };

  render() {
    return (
      <Grid>
       <Row>
       <Col xs={12}>
        <header className="App-header">
          <h1 className="App-title">Welcome to Breakfast Center</h1>
        </header>

        <Router history={history}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <ComponentWithFormOnly
                  value={this.state.value}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
            <Route
              path="/MenuCard"
              render={() => <MenuCard name={this.state.value} />}
            />
          </Switch>
        </Router>
        </Col>
        </Row>
      </Grid>
    );
  }
}
export default CustomerForm;
