import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AppCondensed from './AppCondensed'
import { nanoid } from 'nanoid'

function ViewAllApps() {
    const unreadApps = useSelector(state=>state.unreadApps)
    useEffect(()=> {
        return
    },[unreadApps])
    if(unreadApps){
        return (<div>
                {unreadApps.map((app) => {
                    return( 
                    <AppCondensed
                    firstName={app.firstName}
                    lastName={app.lastName}
                    email={app.email}
                    phone={app.phone}
                    key={nanoid()}
                    />
                    )
                })}
                </div>
        )
    }
    else {
        return(
            <div>
                <h2>No Unread Applications</h2>
            </div>
        )
    }
}

export default ViewAllApps



