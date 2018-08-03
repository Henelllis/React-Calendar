import * as actionTypes from '../actions/actionTypes';

const intialState= {
     daysOfTheMonth : [
        { index: 0, date: '2018-01-01', reminders: [] },
        { index: 1, date: '2018-01-02', reminders: [] },
        { index: 2, date: '2018-01-03', reminders: [] },
        { index: 3, date: '2018-01-04', reminders: [] }
       ]
} 

const addReminder = ( state ,action) =>{
    return {
        ...state,
        index: action.payload.index,
        reminder: action.payload.reminder
    }
}

const removeReminder =( state ,action) => {
    return {
        ...state,
        index: action.payload.index,
        reminder: action.payload.reminder
    }
}

const reducer = (state=intialState, action) => {
    switch(action.type){
        case actionTypes.ADD_REMINDER: return addReminder(state, action);
        case actionTypes.REMOVE_REMINDER: return removeReminder(state, action);
        default: return state;
    }
}


export default reducer;