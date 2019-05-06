import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {
  state = {
    drawerOpen: false,
    menuLinks: [
      {
        path: '/',
        name: 'Productos'
      },
      {
        path: '/login',
        name: 'Login'
      },
      {
        path: '/handle_item',
        name: 'Agregar producto'
      },
    ]
  }

  handleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  generateRouterLink = () => {
    return this.state.menuLinks.map((link, i) => (
      <Link
        key={i}
        to={link.path}
        onClick={this.handleDrawer}>
        <Button style={{
          outline: 'none'
        }}>
          {link.name}
        </Button>
      </Link>
    ))
  };


  render() {
    return (
      <div className={styles.Navbar}>
        <AppBar position='static' style={{
          backgroundColor: '#333'
        }}>
          <Toolbar style={{
            justifyContent: 'space-between'
          }}>
            <IconButton
              color='inherit'
              onClick={this.handleDrawer}
              style={{
                outline: 'none'
              }}>
              <MenuIcon />
            </IconButton>

            <Link to='/' className={styles.link}>
              <Button className={styles.button}>
                Inventario de productos
              </Button>
            </Link>

            <Link to="/login" className={styles.link}>
              <Button className={styles.button}>
                Login
              </Button>
            </Link>

          </Toolbar>
        </AppBar>

        <Drawer open={this.state.drawerOpen} onClose={this.handleDrawer}>
          {this.generateRouterLink()}
        </Drawer>
      </div>
    );
  }
};

export default Navbar;
