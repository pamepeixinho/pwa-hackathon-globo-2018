import React, { Component } from 'react';
import styled from 'styled-components';
import Table, { TableCell, TableRow } from 'material-ui/Table';

import { search } from '../../api/search';
import SearchBox from './SearchBox';
import Header from '../../components/Header';
import SideMenu from  '../../components/SideMenu';

const Wrapper = styled.div`
`;

class Search extends Component {
  state = {
    searchText: '',
    results: [],
    loading: false,
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleFinalSearch = async () => {
    this.setState({ loading: true });
    const results = await search(this.state.searchText)
    this.setState({ results, loading: false });
  }

  render() {
    const { results } = this.state;
    return (
      <Wrapper>
        <Header />
        <SideMenu />
        <SearchBox
          searchText={this.state.searchText}
          handleSearchText={this.handleSearchText}
          handleFinalSearch={this.handleFinalSearch}
          loading={this.state.loading}
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
