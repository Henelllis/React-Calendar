import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className ="calendar-month-header"> AUGUST </span>
        <table className="calendar-table">
          <thead >
              <tr>
                <th> Mon </th>
                <th> Tues </th>
                <th> Wed </th>
                <th> Thu </th>
                <th> Fri </th>
                <th> Sat </th>
                <th> Sun </th>
              </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default App;
