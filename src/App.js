import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/home';
import Search from './containers/search';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" component={Search} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
