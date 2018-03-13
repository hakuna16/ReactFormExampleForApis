import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class DatePickerInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({startDate: date});
    this.props.selectDate(date);
  }

  render() {
    return (
      <div className="form-group">
        <label>{this.props.value}</label>
        <DatePicker
            className="form-control"
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="YYYY-MM-DD"
        />
      </div>
    );
  }
}

export default DatePickerInput;
