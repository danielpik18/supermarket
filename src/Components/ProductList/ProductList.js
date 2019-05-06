import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel,
  Checkbox,
  Paper
} from "@material-ui/core";
import { Fade } from 'react-reveal';
import dummyProducts from './dummyProducts';

const ProductList = () => {

  const TableCategories = ['ID', 'Nombre', 'Precio', 'Stock'];

  const renderTableBodyRows = () => {
    return dummyProducts.map((product, i) => (
      <TableRow key={i}>
        <TableCell padding='checkbox'>
          <Checkbox />
        </TableCell>
        <TableCell>{i}</TableCell>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{product.stock}</TableCell>
      </TableRow>
    ));
  };

  const renderTableHeadCells = () => {
    return TableCategories.map((category, i) => (
      <TableCell>
        <TableSortLabel
          active={true}
          direction='desc'
        >
          {category}
        </TableSortLabel>
      </TableCell>
    ));
  };

  return (
    <Fade>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox />
              </TableCell>

              {renderTableHeadCells()}

            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableBodyRows()}
          </TableBody>
        </Table>
      </Paper>
    </Fade>
  );
}

export default ProductList;
