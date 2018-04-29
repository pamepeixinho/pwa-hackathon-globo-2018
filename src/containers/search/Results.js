import React, { Component } from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ResultBox from './ResultBox';

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: grey;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  padding: 16px 0;
`;

const Root = styled.div`
  width: calc(100% - 275px);
`;

const Warning = styled.div`
  background-color: #ef9168;
  width: 85%;
  height: 50px;
  opacity: 0.6;
  margin: 24px auto 16px;
  padding-top: 45%;
`;

const styles = {
  button: {
    height: 16,
  },
}

class Results extends Component {
  handle = () => {
    window.location.reload();
  }

  render() {
    const { verified, nonVerified, isImage, blacklist } = this.props;
    const text = '> Apuração de Notícias';
    return (
      <Root>
        <Paper>
          <div>
            <Wrapper>
              <Button variant="flat" onClick={this.handle}>
                {text}
              </Button>
              <Button variant="raised" color="primary" onClick={this.handle}>
                Nova apuração
              </Button>
            </Wrapper>
            <LineSeparator />
          </div>
          { blacklist &&
            <Warning>
              {`Foram encontrados ${blacklist.length} notícias que não atendem aos filtros adicionados selecionadas`}
            </Warning>
          }
          <h3 style={{ paddingLeft: 100 }}>Fontes Oficiais</h3>
          <ResultBox results={verified} isImage={isImage} />
          <br />
          <br />
          <h4 style={{ paddingLeft: 100 }}>Fontes não verificadas</h4>
          <ResultBox results={nonVerified} isImage={isImage} />
        </Paper>
      </Root>
    );
  }
}

export default withStyles(styles)(Results);


