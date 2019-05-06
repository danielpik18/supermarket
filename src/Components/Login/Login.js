import React, { Component } from "react";
import { TextField, Button, Popover, Typography } from "@material-ui/core";
import styles from "./Login.module.css";
import { Fade } from 'react-reveal';

class Login extends Component {
  state = {
    password: '',
    incorrectPassword: false,
    anchorElement: null
  };

  handleLogin = (event) => {
    console.log(this.state.password);
  }

  HandlePopoverClose = () => {
    this.setState({ incorrectPassword: false });
  }

  render() {

    return (
      <Fade>
        <div className={styles.loginWrapper}>

          <Typography variant='h6'>
            Ingresa la contrasena de administrador
          </Typography>

          <br />

          <div className={styles.form}>
            <TextField
              required
              label='Admin password'
              type="password"
              onChange={(event) => this.setState({ password: event.target.value })}>
            </TextField>

            <Popover
              open={this.state.incorrectPassword}
              onClose={this.HandlePopoverClose}
              anchorEl={this.state.anchorElement}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
              incorrect password
          </Popover>

            <Button
              variant="contained"
              color='secondary'
              onClick={this.handleLogin}>
              Entrar
          </Button>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Login;
