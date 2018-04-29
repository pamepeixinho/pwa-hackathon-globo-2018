import React, { Component } from 'react';
import styled from 'styled-components';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Card, { CardContent } from 'material-ui/Card';

const Title = styled.h3`
  padding: 16px 0 0 16px;
`;

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: grey;
`;

const Wrapper = styled.div`
  width: calc(100% - 275px);
`;

const styles = {
  card: {
    maxWidth: 760,
    margin: '24px auto 0',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
};

class SearchBox extends Component {
  render() {
    const { loading } = this.props;
    const { card, button } = this.props.classes;
    return (
      <Wrapper>
        <div>
          <Title>Apuração de Notícias</Title>
          <LineSeparator />
        </div>
        <Card className={card}>
          <CardContent>
            <TextField
              fullWidth
              id="searchText"
              label="Insira a notícia"
              value={this.props.searchText}
              onChange={this.props.handleSearchText}
              margin="normal"
            />
            <p>Filtros adicionais</p>
            <TextField
              id="cidade"
              label="Localização"
              value="Rio de Janeiro, RJ"
              margin="normal"
            />
            <Button
              className={button}
              onClick={this.props.handleFinalSearch}
              variant="raised" color="primary"
            >
            { loading ? <CircularProgress size={20} thickness={7} style={{ color: 'white' }} /> : 'Apurar' }
            </Button>
          </CardContent>
        </Card>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(SearchBox);
