import {
    FETCH_APPROVED_APPS,
    FETCH_UNREAD_APPS,
    ADD_TO_UNREAD,
    MARK_ACCEPTED,
    MARK_REJECTED
} from '../actions/action-types'


const initialState = {
    unreadApps: [],
    undecidedApps: [],
    acceptedApps: [],
    rejectedApps: []
}

export const addSubmittedApp = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_UNREAD:
            state.unreadApps.push(action.payload)
            return ({...state})
        default:
            return state
    }
}

export const getAppsFromDB = (state=initialState, action) => {
    switch(action.type){
        case FETCH_APPROVED_APPS:
            state.acceptedApps.push(...action.payload)
            return state
        case FETCH_UNREAD_APPS:
            state.unreadApps.push(...action.payload)
            return state
        default:
            return state
    }
}

export const changeAppStatus = (state=initialState, action) => {
    switch(action.type){
        case MARK_ACCEPTED:
            return
        case MARK_REJECTED:
            return
        default:
            return
    } 
}

