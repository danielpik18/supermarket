import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { FiPackage, FiUser, FiPlusCircle } from 'react-icons/fi';

class Navbar extends Component {
  state = {
    drawerOpen: false,
    menuLinks: [
      {
        path: '/',
        name: 'Productos',
        icon: <FiPackage style={{
          marginRight: '1rem'
        }} />
      },
      {
        path: '/login',
        name: 'Login',
        icon: <FiUser style={{
          marginRight: '1rem'
        }} />
      },
      {
        path: '/add_item',
        name: 'Agregar producto',
        icon: <FiPlusCircle style={{
          marginRight: '1rem'
        }} />
      },
    ]
  }

  handleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  generateRouterLinks = () => {
    return this.state.menuLinks.map((link, i) => {

      return (
        <Link
          key={i}
          className={styles.link}
          to={link.path}
          onClick={this.handleDrawer}>
          <ListItem button>
            <ListItemText style={{
              padding: '.6rem'
            }}>
              {link.icon}
              {link.name}
            </ListItemText>
          </ListItem>
        </Link>
      );
    })
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
              <FiPackage />
              <Button className={styles.button}>
                Inventario de productos
              </Button>
            </Link>

            <Link to="/login" className={styles.link}>
              <FiUser />
              <Button className={styles.button}>
                Login
              </Button>
            </Link>

          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.drawerOpen}
          onClose={this.handleDrawer}
          width='30rem'
        >
          <List>
            {this.generateRouterLinks()}
          </List>
        </Drawer>
      </div>
    );
  }
};

export default Navbar;
