import {
    FETCH_APPLICATIONS,
    MAP_APPS_TO_CHILDREN,
    ADD_TO_UNREAD,
    MARK_UNDECIDED,
    MARK_ACCEPTED,
    MARK_REJECTED
} from '../actions/action-types'

const initialState = {
    unreadApps: [{}],
    undecidedApps: [{}],
    acceptedApps: [{}],
    rejectedApps: [{}]
}

export const addSubmittedApp = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_UNREAD:
            state.unreadApps.push(action.payload)
            return state
        default:
            return state
    }
}

export const getAppsFromDB = (state=initialState, action) => {
    switch(action.type){
        case FETCH_APPLICATIONS:
            return
        case MAP_APPS_TO_CHILDREN:
            return
        default:
            return
    }
}

export const changeAppStatus = (state=initialState, action) => {
    switch(action.type){
        case MARK_UNDECIDED:
            return
        case MARK_ACCEPTED:
            return
        case MARK_REJECTED:
            return
        default:
            return
    } 
}

