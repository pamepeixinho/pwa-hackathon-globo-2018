import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';

import { search } from '../../api/search';
import SearchBox from './SearchBox';
import Header from '../../components/Header';
import SideMenu from  '../../components/SideMenu';
import Results from './Results';

const EPImage = 'https://backend-bbb.herokuapp.com/search/image';


class Search extends Component {
  state = {
    selectedFile: null,
    searchText: '',
    verified: [],
    nonVerified: [],
    blacklist: [],
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
    this.fileUploadHandler();
    const results = await search(this.state.searchText)
    const {verified, nonVerified, blacklist} = results;
    this.setState({ verified, nonVerified, blacklist, loading: false });
  }

  render() {
    const { verified, nonVerified, blacklist } = this.state;
    return (
      <div>
        <Header />
        <SideMenu />
        {!(verified && verified.length > 0) ?
          <SearchBox
            searchText={this.state.searchText}
            handleSearchText={this.handleSearchText}
            handleFinalSearch={this.handleFinalSearch}
            loading={this.state.loading}
            fileSelectedHandler={this.fileSelectedHandler}
          />
          :
          <Results verified={verified} nonVerified={nonVerified}  blacklist={blacklist}/>
        }
      </div>
    );
  }
}

export default Search;
