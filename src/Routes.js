import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import Login from "./Components/Login/Login";
import AddProduct from './Components/Admin/AddProduct/AddProduct';

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
            <Route path="/add_item" component={AddProduct} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default Routes;
