import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Table, { TableCell, TableRow, TableBody, TableHead } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';

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
    const { results, isImage } = this.props;
    debugger
    return (
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead className={this.props.classes.head}>
            <TableRow>
              <TableCell>{ isImage ? 'Imagem' : 'Título' }</TableCell>
              <TableCell>Fonte</TableCell>
              <TableCell>Data de Publicação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => {
              return (
                <TableRow key={result.title}>
                  <TableCell style={{ maxWidth: 100 }}>
                    {isImage ? <img style={{ width: 64, height: 64}} src={result.href} alt="imgzinha" /> : result.title}
                  </TableCell>
                  <TableCell style={{ maxWidth: 180 }}>
                    <a href={isImage ? result.backlink : result.href}>
                      {isImage? result.backlink : result.domainLabel}
                    </a>
                  </TableCell>
                  <TableCell>{moment(result.date).format('LL')}</TableCell>
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


