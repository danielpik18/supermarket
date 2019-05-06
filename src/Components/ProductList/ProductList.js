import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  Paper
} from "@material-ui/core";
import { Fade } from 'react-reveal';
import dummyProducts from './dummyProducts';

const ProductList = () => {

  const renderProducts = (name, price, stock) => {
    return dummyProducts.map((product, i) => (
      <TableRow key={i}>
        <Checkbox />
        <TableCell>{i}</TableCell>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{product.stock}</TableCell>
      </TableRow>
    ));
  };

  return (
    <Fade>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderProducts()}
          </TableBody>
        </Table>
      </Paper>
    </Fade>
  );
}

export default ProductList;
