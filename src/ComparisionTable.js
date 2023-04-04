import * as React from "react";
import _ from "lodash";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Amazon } from "./Amazon";
import { Flipkart } from "./Flipkart";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.grey[200],
}));

const ProductComparisonTable = (props) => {
  const amazon_price = _.map(Amazon, "price");
  const amazon_description = _.map(Amazon, "description");
  const flipkart_price = _.map(Flipkart, "price");
  const flipkart_description = _.map(Flipkart, "description");
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="product comparison table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Features</StyledTableCell>
            <StyledTableCell align="right">Amazon</StyledTableCell>
            <StyledTableCell align="right">Flipkart</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Price
            </TableCell>
            <TableCell align="right">{amazon_price[props.index]}</TableCell>
            <TableCell align="right">{flipkart_price[props.index]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Description
            </TableCell>
            <TableCell align="right">{amazon_description[props.index]}</TableCell>
            <TableCell align="right">{flipkart_description[props.index]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductComparisonTable;
