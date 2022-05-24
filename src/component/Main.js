import React from "react";
import DatePicker from "react-datepicker";
import '../../node_modules/react-datepicker/dist/react-datepicker.css'
import './Main.css'
export default class Main extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className = 'container'>
          <div className ='header'>
             <h2>به پنل مدیریت خوش آمدید </h2>
          </div>
        
        <div className = 'date-picker'>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        </div>
      </div>
    );
  }
}