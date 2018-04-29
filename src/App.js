import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './containers/home';
import Search from './containers/search';

const StyledRouter = styled(Router)`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
`;

class App extends React.Component {
  render() {
    return (
      <StyledRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </React.Fragment>
      </StyledRouter>
    );
  }
}

export default App;
