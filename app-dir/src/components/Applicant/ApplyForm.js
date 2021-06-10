import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../../styles/ApplyForm.css'
import {
        handleFirstName,
        handleLastName,
        handleEmail,
        handlePhone,
        handleExt1,
        handleExt2
    } from '../../actions/applyFormActions'
import { handleInputChange } from '../../action'
import { addSubmittedApp } from '../../actions/viewApplicationsActions'

function ApplyForm() {
    const state = useSelector(state=>state)
    
    const dispatch = useDispatch()
    return (
        <div className="apply-form">
        <h1 className="job-header">Apply for the SWE I position at Lunar Unicorn</h1>
            <input className="form-field" type="text" placeholder="first name" onChange={(e)=>handleFirstName(dispatch, e.target.value)}/>
            <input className="form-field" type="text" placeholder="last name" onChange={(e)=>handleLastName(dispatch, e.target.value)}/>
            <input className="form-field" type="text" placeholder="email" onChange={(e)=>handleEmail(dispatch, e.target.value)}/>
            <input className="form-field" type="text" placeholder="mobile number" onChange={(e)=>handlePhone(dispatch, e.target.value)}/>
            <textarea className="form-field" name="q1" id="" cols="30" rows="10" onChange={(e)=>handleExt1(dispatch, e.target.value)} placeholder="Tell us about a time when you showed entrepreneurship in an non-enterpreneurial situation."></textarea>
            <textarea className="form-field" name="q1" id="" cols="30" rows="10" onChange={(e)=>handleExt2(dispatch, e.target.value)} placeholder="If you had to choose between saving your relationships or sending this company to the moon, tell us which one you would pick and why."></textarea>
            <button onClick={()=>addSubmittedApp(dispatch, state.handle)}>Shoot for the Moon</button>
        </div>
    )
}

export default ApplyForm
