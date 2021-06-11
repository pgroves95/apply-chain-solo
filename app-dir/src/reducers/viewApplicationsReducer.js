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
            for(let [i,app] of state.unreadApps.entries()){
                if(app.phone === action.payload){
                    state.acceptedApps.push(app)
                    state.unreadApps.splice(i,1)
                    return {...state}
                }
            }
            return state
        case MARK_REJECTED:
            for(let [i,app] of state.acceptedApps.entries()){
                if(app.phone === action.payload){
                    // state.rejectedApps.push(app)
                    state.acceptedApps.splice(i,1)
                    return {...state}
                }
            }
            for(let [i,app] of state.unreadApps.entries()){
                if(app.phone === action.payload){
                    // state.rejectedApps.push(app)
                    state.unreadApps.splice(i,1)
                    return {...state}
                }
            }
            return state
        default:
            return state
    } 
}

