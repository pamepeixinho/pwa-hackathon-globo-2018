import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Table, { TableCell, TableRow } from 'material-ui/Table';

import { search } from '../../api/search';
import SearchBox from './SearchBox';
import Header from '../../components/Header';
import SideMenu from  '../../components/SideMenu';
import Results from './Results';

const EPImage = 'https://backend-bbb.herokuapp.com/search/image';
const Wrapper = styled.div`
`;

class Search extends Component {
  state = {
    selectedFile: null,
    searchText: '',
    results: [],
    loading: false,
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('dataFile', this.state.selectedFile,'dataFile');
    axios.post(EPImage, fd)
      .then((res) => console.log(res));
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleFinalSearch = async () => {
    this.setState({ loading: true });
    const results = await search(this.state.searchText)
    this.setState({ results, loading: false });
    /* <input type='file' onChange={this.fileSelectedHandler}> */
    /* <button onClick={this.fileUploadHandler}>Upload</button> */
  }

  render() {
    const { results } = this.state;
    return (
      <Wrapper>
        <Header />
        <SideMenu />
        {!(results && results.length > 0) ?
          <SearchBox
            searchText={this.state.searchText}
            handleSearchText={this.handleSearchText}
            handleFinalSearch={this.handleFinalSearch}
            loading={this.state.loading}
          />
          :
          <Results official={results} others={results} />
        }
      </Wrapper>
    );
  }
}

export default Search;
