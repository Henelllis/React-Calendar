import React, {Component} from 'react';
import { connect } from 'react-redux';


import CalenderHeader from '../../Component/CalendarHeader/CalenderHeader';
import CalendarDay from '../../Component/CalendarDay/CalendarDay';
import UnUsedCalendarDay from '../../Component/UnUsedCalendarDay/UnUsedCalendarDay';
import styles from './Calendar.css';
import NewReminderForm from '../../UI/NewReminderForm/NewReminderForm';
import * as actions from '../../store/actions/dates';


class Calendar extends Component {

    state= {
        firstDayOffset: 0,
        endDayOffset:0,
        newReminderFormOpen: false,
        currentIndex: 88
    }

    componentDidMount() {
        this.setState({
            firstDayOffset: new Date(this.props.days[0].date).getDay(),
            endDayOffset: 6 - (new Date(this.props.days[30].date).getDay())
        },
        );
    }

    getFirstWeek = () => {

        let weekDays= null;

        
        let firstUnusedDaysOfMonthArray = new Array(this.state.firstDayOffset).fill(false);

        let firstUnusedDaysOfMonth = firstUnusedDaysOfMonthArray.map(el => {
            return(
                <UnUsedCalendarDay/>
            )
        });


        console.log('ERROR BOUNDARY CONDITION FOR props.day', this.props.days);
        weekDays = this.props.days.filter(day =>  day.index < 7 - this.state.firstDayOffset).map( day => {
            return (
                <CalendarDay key={day.index} 
                             dayNum={day.index + 1} 
                             reminders={day.reminders}
                             addReminder={this.addReminder}/>
            )
        });

        return(
            <tr>
                {firstUnusedDaysOfMonth}
                {weekDays}
            </tr>
        )


    }

    getMiddleWeek = (startDateIndex , endDateIndex) => {
        let weekDays= null;

        weekDays = this.props.days.filter(day => ( day.index >  startDateIndex && day.index < endDateIndex ))
            .map( day => {
                return (
                
                    <CalendarDay key={day.index} 
                                 dayNum={day.index + 1} 
                                 reminders={day.reminders}
                                 addReminder={this.addReminder}/>
                )
            });


        return(
            <tr>
                {weekDays}
            </tr>
        )

    }

    getLastWeek = (startDateIndex , endDateIndex ) => {
        let weekDays= null;
        weekDays = this.props.days.filter(day => ( day.index >  startDateIndex && day.index < endDateIndex  - this.state.endDayOffset))
            .map( day => {
                return (
                
                    <CalendarDay key={day.index} 
                                 dayNum={day.index + 1} 
                                 reminders={day.reminders}
                                 addReminder={this.addReminder}/>
                )
            });

        let lastUnusedDaysOfMonthArray = new Array(this.state.endDayOffset).fill(false);

        let lastUnusedDaysOfMonth = lastUnusedDaysOfMonthArray.map(el => {
            return(
                <UnUsedCalendarDay/>
            )
        });

        return(
            <tr>
                {weekDays}
                {lastUnusedDaysOfMonth}
            </tr>
        )

    }

    addReminder = (index) => {
        console.log('[INDEX USED] ', index)

        this.props.setIndex(index);
        this.setState({
            newReminderFormOpen: true,
        })
    }

    closeAddReminder = () => {
        this.setState({newReminderFormOpen: false})
    }
    



    render () {


        let week = this.getFirstWeek();
        let secondWeek = this.getMiddleWeek( 7 - this.state.firstDayOffset - 1, 14 - this.state.firstDayOffset );
        let thirdWeek = this.getMiddleWeek( 14 - this.state.firstDayOffset - 1, 21 - this.state.firstDayOffset );
        let fourthWeek = this.getMiddleWeek( 21 - this.state.firstDayOffset - 1, 28 - this.state.firstDayOffset );
        let lastWeek = this.getLastWeek( 28 - this.state.firstDayOffset - 1, 35 - this.state.firstDayOffset );


        return (
            <div>
            <span className ={styles.monthHeader}> AUGUST </span>
            <table className={styles.table}>
                <CalenderHeader/>
                <NewReminderForm  
                    show={this.state.newReminderFormOpen} 
                    closeAddReminder={this.closeAddReminder}/>
                {week}
                {secondWeek}
                {thirdWeek}
                {fourthWeek}
                {lastWeek}
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

const mapDispatchToProps = dispatch => {
    return {
        setIndex : (index) => dispatch(actions.setIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);