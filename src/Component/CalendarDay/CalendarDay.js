import React from 'react';
import styles from './CalendarDay.css';

const calendarDay = (props) => {

    let listItems = null;

    if(props.reminders){
         listItems = (
            props.reminders.map( reminder => {
                return (
                    <li key={reminder} > {reminder.reminderNote} </li>
                )
            })
        )
    }

    return(
        <td className={styles.calendarDay}> 
        <div className={styles.calendarDayContent}>
            <div className={styles.calendarDayHeader}>
                <div className={styles.dayNumber}>{props.dayNum}</div>
                <button 
                    className={styles.exitButton}
                    onClick={() => props.addReminder(props.dayNum)}
                >  + </button>
            </div>
            <ul className={styles.reminderList}>
                {listItems}
            </ul>
        </div>
    </td>
    )
}

export default calendarDay;