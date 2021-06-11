import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../../styles/ApplyForm.css'
import {
        handleFirstName,
        handleLastName,
        handleEmail,
        handlePhone,
        handleExt1,
        handleExt2,
        resetInputs
    } from '../../actions/applyFormActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { addSubmittedApp } from '../../actions/viewApplicationsActions'

function ApplyForm() {
    const state = useSelector(state=>state)

    const dispatch = useDispatch()
    return (
        <div className="apply-form">
        <h1 className="job-header">Apply for the SWE I position at Lunar Unicorn</h1>
        <p>Little experience? No experience? No problem! 
        Here at Lunar Unicorn, we pride ourselves on taking what
        used to be essentially worthless individuals and transforming
        them into world-class software engineers.</p>
        <p>Requirements:</p>
        <ul>
            <li>Must be 18 or older</li>
            <li>Must be willing to sign a non-disclosure agreement that is legally enforceable for life</li>
            <li>Must be willing to work up to, but not exceeeding, 90 hours per week</li>
            <li>Must have a great attitude!</li>
        </ul>
        <p>If you think you fit the bill, please fill out the application below! 
        We usually respond to candidates within 30 minutes.</p>
        <div className="form-container">
            <TextField id="filled-basic" variant="filled" className="form-field" type="text" value={state.handleInputChange.firstName} placeholder="first name" onChange={(e)=>handleFirstName(dispatch, e.target.value)}/>
            <TextField id="filled-basic" variant="filled" className="form-field" type="text" value={state.handleInputChange.lastName} placeholder="last name" onChange={(e)=>handleLastName(dispatch, e.target.value)}/>
            <TextField id="filled-basic" variant="filled" className="form-field" type="text" value={state.handleInputChange.email} placeholder="email" onChange={(e)=>handleEmail(dispatch, e.target.value)}/>
            <TextField id="filled-basic" variant="filled" className="form-field" type="text" value={state.handleInputChange.phone} placeholder="mobile number" onChange={(e)=>handlePhone(dispatch, e.target.value)}/>
            <TextField id="filled-basic" variant="filled" multiline="true" className="form-field" value={state.handleInputChange.ext1} name="q1" cols="30" rows="10" onChange={(e)=>handleExt1(dispatch, e.target.value)} placeholder="Tell us about a time when you showed entrepreneurship in an non-enterpreneurial situation."></TextField>
            <TextField id="filled-basic" variant="filled" multiline="true" className="form-field" value={state.handleInputChange.ext2} name="q1" cols="30" rows="10" onChange={(e)=>handleExt2(dispatch, e.target.value)} placeholder="If you had to choose between saving your relationships or sending this company to the moon, tell us which one you would pick and why."></TextField>
            <Button variant="contained" className="btn" onClick={()=>{
                addSubmittedApp(dispatch, state.handleInputChange)
                resetInputs(dispatch, state)
                }}>Shoot for the Moon</Button>
        </div>
        </div>
    )
}

export default ApplyForm
