import React, { Component } from 'react';
import styled from 'styled-components';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Card, { CardContent } from 'material-ui/Card';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



const Title = styled.h3`
  padding: 16px 0 0 16px;
`;

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: grey;
`;

const Wrapper = styled.div`
  width: calc(100% - 275px);
`;

const Input = styled.input`
  width: 190px;
  margin-left: 10px;
`;

const Div = styled.div`
  float: right;
  margin-left: 10px;
`;

const styles = {
  card: {
    maxWidth: 760,
    margin: '24px auto 0',
    position: 'relative',
    minHeight: 600,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  textField: {
    marginRight: 10,
    width: 'calc(100% - 350px)',
  },
};

const Test = styled.p`
  margin-bottom: 16px;
`;


class SearchBox extends Component {
  state = {
    startDate: null,
    endDate: null
  }

  render() {
    const { loading } = this.props;
    const { card, button } = this.props.classes;
    return (
      <Wrapper>
        <div>
          <Title>Apuração de Notícias</Title>
          <LineSeparator />
        </div>
        <Card className={card}>
          <CardContent>
            <TextField
              fullWidth
              id="searchText"
              label="Insira a notícia"
              value={this.props.searchText}
              onChange={this.props.handleSearchText}
              className={this.props.classes.textField}
              margin="normal"
              style={{ marginTop: 10, marginLeft: 10 }}
            />
            ou
            <Input type='file' onChange={this.props.fileSelectedHandler} />
            <Test>Filtros adicionais</Test>
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id"
              isOutsideRange={() => false}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
            <Div>
              <TextField
                id="cidade"
                label="Localização"
                value="Rio de Janeiro, RJ"
                margin="normal"
                className={this.props.classes.text}
              />
            </Div>
            <Button
              className={button}
              onClick={this.props.handleFinalSearch}
              variant="raised" color="primary"
            >
            { loading ? <CircularProgress size={20} thickness={7} style={{ color: 'white' }} /> : 'Apurar' }
            </Button>
          </CardContent>
        </Card>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(SearchBox);
