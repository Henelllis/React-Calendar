import React, {Component} from 'react';
import { connect } from 'react-redux';


import CalenderHeader from '../../Component/CalendarHeader/CalenderHeader';
import CalendarDay from '../../Component/CalendarDay/CalendarDay';
import UnUsedCalendarDay from '../../Component/UnUsedCalendarDay/UnUsedCalendarDay';
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
                <UnUsedCalendarDay/>
                <UnUsedCalendarDay/>
                <CalendarDay dayNum={1} reminders={['12:13 AM','4:20 PM']}/>
                <CalendarDay dayNum={2} />
                {/* <CalendarDay dayNum={3}/>
                <CalendarDay dayNum={4}/>
                <CalendarDay/> */}
            </tr>

            </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        days: state.daysOfTheMonth,
    }
}

export default connect(mapStateToProps)(Calendar);