import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Table, { TableCell, TableRow } from 'material-ui/Table';

class ResultBox extends Component {
  render() {
    const { results } = this.props;
    return (
      <React.fragment>
        <div>Test</div>
          {results.map((result) => {
            return (
              <TableRow key={result.title}>
                <TableCell>{result.title}</TableCell>
                <TableCell>{result.href}</TableCell>
                <TableCell>{result.desc}</TableCell>
                <TableCell>{result.date}</TableCell>
              </TableRow>
            );
          })}
      </React.fragment>
    );
  }
}

export default ResultBox;


