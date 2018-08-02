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
            <tr>
                <td  className={styles.unUsedDay}> </td>
                <td  className={styles.unUsedDay}> </td>
                <td className={styles.calendarDay}> 
                    <div className={styles.dayNumber}>1</div>
                    <button className={styles.exitButton}>  + </button>
                    <ul className={styles.reminderList}>
                        <li>12:15 AM</li>
                        <li>1:15 AM</li>
                        <li>2:15 AM</li>
                        <li>3:15 AM</li>
                    </ul>
                 </td>
                 <td className={styles.calendarDay}> 
                    <div className={styles.dayNumber}>2</div>
                    <button className={styles.exitButton}>  + </button>
                    <ul className={styles.reminderList}>
                        <li>12:15 AM</li>
                        <li>1:15 AM</li>
                        <li>2:15 AM</li>
                        <li>3:15 AM</li>
                    </ul>
                 </td>
                 <td className={styles.calendarDay}> 
                    <div className={styles.dayNumber}>3</div>
                    <button className={styles.exitButton}>  + </button>
                    <ul className={styles.reminderList}>
                        <li>12:15 AM</li>
                        <li>1:15 AM</li>
                        <li>2:15 AM</li>
                        <li>3:15 AM</li>
                    </ul>
                 </td>
                 <td className={styles.calendarDay}> 
                    <div className={styles.dayNumber}>4</div>
                    <button className={styles.exitButton}>  + </button>
                    <ul className={styles.reminderList}>
                        <li>12:15 AM</li>
                        <li>1:15 AM</li>
                        <li>2:15 AM</li>
                        <li>3:15 AM</li>
                    </ul>
                 </td>
                 <td className={styles.calendarDay}> 
                    <div className={styles.dayNumber}>6</div>
                    <button className={styles.exitButton}>  + </button>
                    <ul className={styles.reminderList}>
                        <li>12:15 AM</li>
                        <li>1:15 AM</li>
                        <li>2:15 AM</li>
                        <li>3:15 AM</li>
                    </ul>
                 </td>
            </tr>
            </table>
            </div>
        )
    }
}

export default Calendar;