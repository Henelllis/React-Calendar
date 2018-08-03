import * as actionTypes from './actionTypes';


export const setIndex = (index) => {
    return {
        type: actionTypes.SET_CURRENT_INDEX,
        payload: {
            index
        }
    }
}