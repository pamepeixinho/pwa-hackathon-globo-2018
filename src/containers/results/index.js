import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: red;
`;

class Results extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <h1>Welcome to results</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Wrapper>
    );
  }
}

export default Results;
