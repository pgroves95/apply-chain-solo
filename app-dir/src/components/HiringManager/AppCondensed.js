import React from 'react'
import '../../styles/AppCondensed.css'

function AppCondensed(props) {
    const {app} = props
    return (
        <div className="AppCondensedCard">
            <ul className="CondensedInfoList">
                <li>{app.firstName}</li>
                <li>{app.lastName}</li>
                <li>{app.email}</li>
                <li>{app.phone}</li>
            </ul>
            <button>View More</button>
        </div>
    )
}

export default AppCondensed
