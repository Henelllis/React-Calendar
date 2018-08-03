import React from 'react';
import styles from './CalendarDay.css';

const calendarDay = (props) => {

    let listItems = null;

    if(props.reminders){
         listItems = (
            props.reminders.map( reminder => {
                return (
                    <li > reminder </li>
                )
            })
        )
    }

    return(
        <td className={styles.calendarDay}> 
        <div className={styles.dayNumber}>{props.dayNum}</div>
        <button className={styles.exitButton}>  + </button>
        <ul className={styles.reminderList}>
            {listItems}
        </ul>
    </td>
    )
}

export default calendarDay;