import React, { Component } from "react";
import history from "../history.js";

class ComponentWithFormOnly extends Component {
  render() {
    return (
      <section className="container">
        <section className="row">
          <section className="col col-sm-12 offset-sm-4	col-md-12	offset-md-4 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
            <form onSubmit={this.props.handleSubmit}>
              <div className="form-group">
                <p>Welcome! Please enter you name to see menu card</p>

                <input
                  className="form-control"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  value="Submit"
                  className="enter form-control"
                  onClick={() => history.push("/MenuCard")}
                >
                  submit
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
    );
  }
}

export default ComponentWithFormOnly;
