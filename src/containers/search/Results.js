import React, { Component } from 'react';

import Table, { TableCell, TableRow } from 'material-ui/Table';

class Results extends Component {
  render() {
    const { results } = this.props;
    return (
      <Table>
          { results && results.length > 0 &&
            results.map((result) => {
              return (
                <TableRow key={result.title}>
                  <TableCell>{result.title}</TableCell>
                  <TableCell>{result.href}</TableCell>
                  <TableCell>{result.des}</TableCell>
                  <TableCell>{result.date}</TableCell>
                </TableRow>
              );
            })
          }
      </Table>
    );
  }
}

export default Results;


