import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Table, { TableCell, TableRow, TableBody, TableHead } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    width: 'calc(100% - 200px)',
    marginTop: '16px',
    overflowX: 'auto',
    margin: '0 auto',
  },
  table: {
    width: '100%',
  },
  head: {
    backgroundColor: '#FAFAFA',
  },
};

class ResultBox extends Component {
  render() {
    const { results, title } = this.props;
    return (
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead className={this.props.classes.head}>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Fonte</TableCell>
              <TableCell>Data de Criação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => {
              return (
                <TableRow key={result.title}>
                  <TableCell style={{ maxWidth: 100 }}>{result.title}</TableCell>
                  <TableCell style={{ maxWidth: 180 }}><a href={result.href}> {result.domainLabel} </a> </TableCell>
                  <TableCell>{result.date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(ResultBox);


