import React, { Component } from 'react';
import { TextField, Typography, Button } from "@material-ui/core";
import styles from './AddProduct.module.css';

class AddProduct extends Component {
    state = {
        name: '',
        password: '',
        stock: 0
    }

    render() {
        return (
            <div className={styles.add_item_wrapper}>
                <Typography variant='h6'>Agrega un nuevo producto</Typography>

                <TextField
                    required
                    label='Nombre'
                    margin='normal'
                    onChange={(event) => this.setState({ name: event.target.value })}>
                </TextField>
                <TextField
                    required
                    label='Precio'
                    margin='normal'
                    onChange={(event) => this.setState({ password: event.target.value })}>
                </TextField>
                <TextField
                    label='Stock'
                    margin='normal'
                    onChange={(event) => this.setState({ stock: event.target.value })}>
                </TextField>

                <br />

                <Button
                    variant="contained"
                    color='primary'
                    onClick={this.addItem}>
                    Agregar
                </Button>
            </div>
        );
    }
}

export default AddProduct;