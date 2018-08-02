import React, {Component} from 'react';

import CalenderHeader from '../../Component/CalendarHeader/CalenderHeader';
import styles from './Calendar.css';


class Calendar extends Component {

    state= {

    }

    render () {
        return (
            <div>
            <span className ={styles.monthHeader}> AUGUST </span>
            <table className={styles.table}>
                <CalenderHeader/>
            </table>
            </div>
        )
    }
}

export default Calendar;