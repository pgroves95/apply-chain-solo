import {
    ADD_TO_UNREAD,
    FETCH_APPROVED_APPS,
    FETCH_UNREAD_APPS

} from './action-types'

export const addSubmittedApp = (dispatch, value) => {
    return dispatch({type: ADD_TO_UNREAD, payload: value})
}

export const fetchApprovedApps = (dispatch, value) => {
    return dispatch({type: FETCH_APPROVED_APPS, payload: value})
}

export const fetchUnreadApps = (dispatch, value) => {
    return dispatch({type: FETCH_UNREAD_APPS, payload: value})
}