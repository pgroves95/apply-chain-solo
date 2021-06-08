import React from 'react'
import '../../styles/ApplyForm.css'

function ApplyForm() {
    return (
        <div className="apply-form">
        <h1 className="job-header">Apply for the SWE I position at Lunar Unicorn</h1>
            <input className="form-field" type="text" placeholder="first name"/>
            <input className="form-field" type="text" placeholder="last name"/>
            <input className="form-field" type="text" placeholder="email" />
            <input className="form-field" type="text" placeholder="mobile number" />
            <textarea className="form-field" name="q1" id="" cols="30" rows="10" placeholder="Tell us about a time when you showed entrepreneurship in an non-enterpreneurial situation."></textarea>
            <textarea className="form-field" name="q1" id="" cols="30" rows="10" placeholder="If you had to choose between saving your relationships or sending this company to the moon, tell us which one you would pick and why."></textarea>
            <button>Shoot for the Moon</button>
        </div>
    )
}

export default ApplyForm
