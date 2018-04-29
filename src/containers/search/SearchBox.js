import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class SearchBox extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>ApuraNews</h1>
        </header>
        <TextField
          id="searchText"
          label="Pesquisa"
          value={this.props.searchText}
          onChange={this.props.handleSearchText}
          margin="normal"
        />
        <Button onClick={this.props.handleFinalSearch}>
          Go
        </Button>
      </React.Fragment>
    );
  }
}

export default SearchBox;
