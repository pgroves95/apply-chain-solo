import React from 'react'
import {nanoid} from 'nanoid'
import {useSelector} from 'react-redux'
import AppCondensed from './AppCondensed'
import '../../styles/ViewAllApps.css'

function UnreadAppsContainer() {
    const unreadApps = useSelector(state=>state.addSubmittedApp.unreadApps)
    return (
    <div className="UnreadApps">     
    {unreadApps ? unreadApps.map((app) => <AppCondensed app={app} key={nanoid()} />) : <div>no unread apps</div>}
    </div>
)
}

export default UnreadAppsContainer
