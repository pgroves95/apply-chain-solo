import { combineReducers } from 'redux'
import { handleInputChange } from './applyFormReducer'
import { addSubmittedApp, getAppsFromDB } from './viewApplicationsReducer'

const rootReducer = combineReducers({
    handleInputChange,
    addSubmittedApp,
    getAppsFromDB
})

export default rootReducer