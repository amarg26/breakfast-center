import React, { Component } from "react";

import CustomerForm from "./CustomerForm";
import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerForm />
      </div>
    );
  }
}

export default App;
