import React, { Component } from 'react';
import axios from 'axios';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { search } from '../../api/search';
import SearchBox from './SearchBox';
import Header from '../../components/Header';
import SideMenu from  '../../components/SideMenu';
import Results from './Results';

const EPImage = 'https://backend-bbb.herokuapp.com/search/image/by-domain';


class Search extends Component {
  state = {
    selectedFile: null,
    searchText: '',
    verified: [],
    nonVerified: [],
    blacklist: [],
    loading: false,
    startDate: null,
    endDate: null,
    isImage: false,
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  
  fileUploadHandler = async () => {
    const fd = new FormData();
    fd.append('dataFile', this.state.selectedFile, 'dataFile');
    await axios.post(EPImage, fd)
      .then((res) => this.handle(res.data));
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleFinalSearch = async () => {
    this.setState({ loading: true });
    if (this.state.selectedFile !== null) {
      this.setState({ isImage: true });
      this.fileUploadHandler();
    } else {
      const results = await search(this.state.searchText)
      this.setState({ isImage: false });
      this.handle(results);
    }
  }

  handle = (results, isImage) => {
    const { verified, nonVerified, blacklist } = results;
    this.setState({ verified, nonVerified, blacklist, loading: false });
  } 

  render() {
    const { verified, nonVerified, blacklist, isImage } = this.state;
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
          <Results verified={verified} nonVerified={nonVerified} isImage={isImage} blacklist={blacklist} />
        }
      </div>
    );
  }
}

export default Search;
