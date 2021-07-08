import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Skeleton from '@material-ui/lab/Skeleton';
import Status from '@Components/Status';

const useStyles = makeStyles({
  table: {
    width: 900,
  },
  th: {
    fontWeight: 'bold',
    width: '40%',
  },
});

function DataTable({ data, isLoading }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Destinatário</TableCell>
            <TableCell>Sucesso</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading
            ? new Array(4).fill(true).map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" className={classes.th}>
                    <Skeleton width={120} />
                  </TableCell>
                  <TableCell>
                    <Skeleton width={70} />
                  </TableCell>
                  <TableCell>
                    <Skeleton width={30} />
                  </TableCell>
                  <TableCell>
                    <Skeleton width={80} />
                  </TableCell>
                </TableRow>
              ))
            : data.map((item) => (
                <TableRow key={item.id} className={classes.row}>
                  <TableCell component="th" scope="row" className={classes.th}>
                    {item.name}
                  </TableCell>
                  <TableCell>{item.recipients}</TableCell>
                  <TableCell>{item.success}</TableCell>
                  <TableCell>
                    <Status id={item.status} />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
