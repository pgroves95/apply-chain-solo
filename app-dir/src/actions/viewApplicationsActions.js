import {
    ADD_TO_UNREAD,
    VIEW_DETAILS

} from './action-types'

export const addSubmittedApp = (dispatch, value) => {
    return dispatch({type: ADD_TO_UNREAD, payload: value})
}

export const viewApplicationDetails = (dispatch, value) => {
    return dispatch({type: VIEW_DETAILS, payload: value})
}