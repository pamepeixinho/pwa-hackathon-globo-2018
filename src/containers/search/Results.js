import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Table, { TableCell, TableRow } from 'material-ui/Table';

class ResultBox extends Component {
  render() {
    const { results } = this.props;
    return (
      <Paper>
        <Table>
          <ResultBox />
          <ResultBox />
        </Table>
      </Paper>
    );
  }
}

export default ResultBox;


