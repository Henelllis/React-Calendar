import * as actionTypes from './actionTypes';


export const setIndex = (index) => {
    return {
        type: actionTypes.SET_CURRENT_INDEX,
        payload: {
            index
        }
    }
}


export const addReminder = (index, reminder) => {
    console.log('[IN THE ACTION PART OF STORE FOR ADD REMINDER ]', reminder);
    return {
        type: actionTypes.ADD_REMINDER,
        payload: {
            index,
            reminder
        }
    }
}


