import React from 'react'

function AppCondensed(props) {
    return (
        <div className="AppCondensedCard">
            <ul className="CondensedInfoList">
                <li>props.firstName</li>
                <li>props.lastName</li>
                <li>props.email</li>
                <li>props.phone</li>
            </ul>
        </div>
    )
}

export default AppCondensed
