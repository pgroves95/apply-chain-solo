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
            <p>props.ext1</p>
            <p>props.ext2</p>
            <button>Option1</button><button>Option2</button><button>Option3</button>
        </div>
    )
}

export default AppCondensed
