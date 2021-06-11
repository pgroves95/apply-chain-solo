import { combineReducers } from 'redux'
import { handleInputChange } from './applyFormReducer'
import { addSubmittedApp, getAppsFromDB, changeAppStatus } from './viewApplicationsReducer'

const rootReducer = combineReducers({
    handleInputChange,
    addSubmittedApp,
    getAppsFromDB,
    changeAppStatus
})

export default rootReducer