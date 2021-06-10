import {
    ADD_TO_UNREAD

} from './action-types'

export const addSubmittedApp = (dispatch, value) => {
    return dispatch({type: ADD_TO_UNREAD, payload: value})
}