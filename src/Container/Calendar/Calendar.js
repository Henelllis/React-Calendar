import React, {Component} from 'react';
import { connect } from 'react-redux';


import CalenderHeader from '../../Component/CalendarHeader/CalenderHeader';
import CalendarDay from '../../Component/CalendarDay/CalendarDay';
import UnUsedCalendarDay from '../../Component/UnUsedCalendarDay/UnUsedCalendarDay';
import styles from './Calendar.css';


class Calendar extends Component {

    state= {
        firstDayOffset: 0,
        endDayOffset:0
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

        weekDays = this.props.days.filter(day =>  day.index < 7 - this.state.firstDayOffset).map( day => {
            return (
                <CalendarDay key={day.index} dayNum={day.index + 1} reminders={day.reminders}/>
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
                console.log('[INDEX]', day.date , " : ", day.index)
                return (
                
                    <CalendarDay key={day.index} dayNum={day.index + 1} reminders={day.reminders}/>
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
                console.log('[INDEX]', day.date , " : ", day.index)
                return (
                
                    <CalendarDay key={day.index} dayNum={day.index + 1} reminders={day.reminders}/>
                )
            });

        console.log('END OF MONTH OFFSET' + this.state.endDayOffset)
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

export default connect(mapStateToProps)(Calendar);