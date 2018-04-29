import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './containers/search';
import Results from './containers/results';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Search} />
          <Route path="/results" component={Results} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
