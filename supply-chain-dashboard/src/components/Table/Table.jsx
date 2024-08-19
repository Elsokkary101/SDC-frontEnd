import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./Table.css";
import { orderData } from "../../Data/Data";
import Status from "../Status/Status";

const fetchOrderData = () => {
    const tableRows = []
    orderData.map((data, key) => {
        const {orderId , customerName , date, status , total} = data;
        tableRows.push({ orderId, customerName, date, status, total });
    });
    return tableRows;
}
const rows = fetchOrderData();

export default function BasicTable() {

  return (
    <div className="Table">
      <h1>Recent Orders</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell align="left">Customer Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderId}
                </TableCell>
                <TableCell align="left">{row.customerName}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.total}</TableCell>
                <TableCell align="left">
                  <Status status={row.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
