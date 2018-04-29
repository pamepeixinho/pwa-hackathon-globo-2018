import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import TextField from 'material-ui/TextField';


const Wrapper = styled.div`
`;

class Search extends Component {
  handleSearchText = () => {
    console.log('skndkasndkan');
  }

  render() {
    return (
      <Wrapper>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <TextField
          id="searchText"
          label="Search Text"
          value={""}
          onChange={this.handleSearchText}
          margin="normal"
        />
        <Link to="results"> GO </Link>
      </Wrapper>
    );
  }
}

export default Search;
