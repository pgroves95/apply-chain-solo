import React from 'react'
import {nanoid} from 'nanoid'
import {useSelector} from 'react-redux'
import AppDetailed from './AppDetailed'
import '../../styles/ViewAllApps.css'



function UnreadAppsContainer() {
    const unreadApps = useSelector(state=>state.addSubmittedApp.unreadApps)
    return (
    <div className="UnreadApps">     
    {unreadApps.length ? unreadApps.map((app) => <AppDetailed app={app} key={nanoid()} />) : <h2>No Unread Applications</h2>}
    </div>
)
}

export default UnreadAppsContainer
