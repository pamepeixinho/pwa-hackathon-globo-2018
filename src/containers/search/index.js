import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import TextField from 'material-ui/TextField';


const Wrapper = styled.div`
`;

class Search extends Component {
  state = {
    searchText: '',
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
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
        <Link to="results"> GO </Link>
      </Wrapper>
    );
  }
}

export default Search;
