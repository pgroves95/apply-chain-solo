import { combineReducers } from 'redux'
import handleInputChange from './applyFormReducer'
import {
    addSubmittedApp
} from './viewApplicationsReducer'

const rootReducer = combineReducers({
    handleInputChange,
    addSubmittedApp
})

export default rootReducer