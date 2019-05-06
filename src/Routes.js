import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import Admin from "./Components/Admin/Admin";
import Login from "./Components/Login/Login";

class Routes extends Component {
  state = {
    auth: false
  }

  render() {
    return (
      <Router>
        <div
          style={{
            padding: "2rem"
          }}
        >
          <Navbar />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default Routes;
