import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

const defaultValue = [

]

function Form({}) {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" gutterBottom>등록</Typography>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        {/*<TableHead>*/}
        {/*  <TableRow>*/}
        {/*    <TableCell colSpan={2}>카테고리 매핑</TableCell>*/}
        {/*  </TableRow>*/}
        {/*</TableHead>*/}
        <TableBody>
          <TableRow>
            <TableCell component="th" sx={{width: 170}}>마켓선택</TableCell>
            <TableCell>

            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Form;