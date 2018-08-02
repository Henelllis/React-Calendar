import React, { Component } from 'react';
import Calender from './Container/Calendar/Calendar';
import styles from './App.css';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
          <Calender />
      </div>
    );
  }
}

export default App;
