import {FIRST_NAME_INPUT,
    LAST_NAME_INPUT,
    EMAIL_INPUT,
    PHONE_INPUT,
    EXTENDED_INPUT_1,
    EXTENDED_INPUT_2,
    RESET_INPUTS
    } from './action-types'

export const handleFirstName = (dispatch, value) => {
    return dispatch({type: FIRST_NAME_INPUT, payload: value})
}

export const handleLastName = (dispatch, value) => {
    return dispatch({type: LAST_NAME_INPUT, payload: value})
}

export const handleEmail = (dispatch, value) => {
    return dispatch({type: EMAIL_INPUT, payload: value})
}

export const handlePhone = (dispatch, value) => {
    return dispatch({type: PHONE_INPUT, payload: value})
}

export const handleExt1 = (dispatch, value) => {
    return dispatch({type: EXTENDED_INPUT_1, payload: value})
}

export const handleExt2 = (dispatch, value) => {
    return dispatch({type: EXTENDED_INPUT_2, payload: value})
}

export const resetInputs = (dispatch,value) => {
    return dispatch({type: RESET_INPUTS, payload:value})
}

