import React, { Component } from 'react';
import styled from 'styled-components';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { search } from '../../api/search';

const Wrapper = styled.div`
`;

class Search extends Component {
  state = {
    searchText: '',
    result: {},
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleFinalSearch = async () => {
    const result = await search(this.state.searchText)
    this.setState({ result });
  }

  render() {
    return (
      <Wrapper>
        <header>
          <h1>ApuraNews</h1>
        </header>
        <TextField
          id="searchText"
          label="Pesquisa"
          value={this.state.searchText}
          onChange={this.handleSearchText}
          margin="normal"
        />
        <Button onClick={this.handleFinalSearch}>
          Go
        </Button>
      </Wrapper>
    );
  }
}

export default Search;
