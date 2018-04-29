import React, { Component } from 'react';
import styled from 'styled-components';
import Table, { TableCell, TableRow } from 'material-ui/Table';

import { search } from '../../api/search';
import SearchBox from './SearchBox';

const Wrapper = styled.div`
`;

class Search extends Component {
  state = {
    searchText: '',
    results: [],
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleFinalSearch = async () => {
    const results = await search(this.state.searchText)
    this.setState({ results });
    console.log(results);
  }

  render() {
    const { results } = this.state;
    return (
      <Wrapper>
        <SearchBox
          searchText={this.state.searchText}
          handleSearchText={this.handleSearchText}
          handleFinalSearch={this.handleFinalSearch}
        />

        <Table>
          { results && results.length > 0 &&
            results.map((result) => {
              return (
                <TableRow key={result.title}>
                  <TableCell>{result.title}</TableCell>
                  <TableCell>{result.href}</TableCell>
                  <TableCell>{result.desc}</TableCell>
                  <TableCell>{result.date}</TableCell>
                </TableRow>
              );
            })
          }
        </Table>
      </Wrapper>
    );
  }
}

export default Search;
