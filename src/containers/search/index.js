import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

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
    startDate: null,
    endDate: null
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
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          isOutsideRange={() => false}
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
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
