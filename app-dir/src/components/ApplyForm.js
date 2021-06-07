import React from 'react'

function ApplyForm() {
    return (
        <div className="apply-form">
        <h1>Apply for the SWE I position at Baller & Co.</h1>
            <input type="text" placeholder="first name"/>
            <input type="text" placeholder="last name"/>
            <textarea name="q1" id="" cols="30" rows="10" placeholder="Tell us in your own words about how dope of a baller you are..."></textarea>
            <button>Shoot That No-Look Three</button>
        </div>
    )
}

export default ApplyForm
