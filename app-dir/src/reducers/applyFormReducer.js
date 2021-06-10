import {
        FIRST_NAME_INPUT,
        LAST_NAME_INPUT,
        EMAIL_INPUT,
        PHONE_INPUT,
        EXTENDED_INPUT_1,
        EXTENDED_INPUT_2
    } from '../actions/action-types'

const initialState = {

    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ext1: "",
    ext2: ""

}



const handleInputChange = (state=initialState, action) => {
    switch(action.type) {
        case FIRST_NAME_INPUT:
            return ({...state, firstName: action.payload})
        case LAST_NAME_INPUT:
            return ({...state, lastName: action.payload})
        case EMAIL_INPUT:
            return ({...state, email: action.payload})
        case PHONE_INPUT:
            return ({...state, phone: action.payload})
        case EXTENDED_INPUT_1:
            return ({...state, ext1: action.payload})
        case EXTENDED_INPUT_2:
            return ({...state, ext2: action.payload})
        case RESET_INPUTS:
            return(iniitalState)
        default:
            return state;
    }
}

export default handleInputChange