import * as actionTypes from '../actions/actionTypes';

const intialState= {
    currentIndex: 0,
     daysOfTheMonth : [
        // { index: 0, date: '2018-08-01', reminders: [] },
        { index: 0, date: '2018-08-02', reminders: [] },
        { index: 1, date: '2018-08-03', reminders: [] },
        { index: 2, date: '2018-08-04', reminders: [] },
        { index: 3, date: '2018-08-05', reminders: [] },
        { index: 4, date: '2018-08-06', reminders: [] },
        { index: 5, date: '2018-08-07', reminders: [] },
        { index: 6, date: '2018-08-08', reminders: [] },
        { index: 7, date: '2018-08-09', reminders: [] },
        { index: 8, date: '2018-08-10', reminders: [] },
        { index: 9, date: '2018-08-11', reminders: [] },
        { index: 10, date: '2018-08-12', reminders: [] },
        { index: 11, date: '2018-08-13', reminders: [] },
        { index: 12, date: '2018-08-14', reminders: [] },
        { index: 13, date: '2018-08-15', reminders: [] },
        { index: 14, date: '2018-08-16', reminders: [] },
        { index: 15, date: '2018-08-17', reminders: [] },
        { index: 16, date: '2018-08-18', reminders: [] },
        { index: 17, date: '2018-08-19', reminders: [] },
        { index: 18, date: '2018-08-20', reminders: [] },
        { index: 19, date: '2018-08-21', reminders: [] },
        { index: 20, date: '2018-08-22', reminders: [] },
        { index: 21, date: '2018-08-23', reminders: [] },
        { index: 22, date: '2018-08-24', reminders: [] },
        { index: 23, date: '2018-08-25', reminders: [] },
        { index: 24, date: '2018-08-26', reminders: [] },

        { index: 25, date: '2018-08-27', reminders: [] },
        { index: 26, date: '2018-08-28', reminders: [] },
        { index: 27, date: '2018-08-29', reminders: [] },
        { index: 28, date: '2018-08-30', reminders: [] },
        { index: 29, date: '2018-08-31', reminders: [] },
        { index: 30, date: '2018-09-01', reminders: [] },
       ]
} 

const addReminder = ( state ,action) => {

    let cloneOfState = {...state};
    let cloneOfDays = [...cloneOfState.daysOfTheMonth];
    cloneOfDays[action.payload.index].reminders.push(action.payload.reminder);


    return {
        ...state,
        currentIndex: action.payload.index,
        daysOfTheMonth: cloneOfDays
    }
}



const removeReminder =( state ,action) => {
    return {
        ...state,
        currentIndex: action.payload.index,
        reminder: action.payload.reminder
    }
}

const setCurrentIndex = (state ,action) => {
    return {
        ...state,
        currentIndex: action.payload.index
    }
}

const reducer = (state=intialState, action) => {
    switch(action.type){
        case actionTypes.ADD_REMINDER: return addReminder(state, action);
        case actionTypes.REMOVE_REMINDER: return removeReminder(state, action);
        case actionTypes.SET_CURRENT_INDEX: return setCurrentIndex(state, action);
        default: return state;
    }
}


export default reducer;