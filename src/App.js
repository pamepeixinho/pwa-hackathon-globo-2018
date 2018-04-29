import React, { Component } from 'react';
import styled from 'styled-components';

// import logo from './logo.svg';

const Wrapper = styled.div`
  background: blue;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Wrapper>
    );
  }
}

export default App;
