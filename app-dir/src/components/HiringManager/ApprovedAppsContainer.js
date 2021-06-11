import React from 'react'
import {nanoid} from 'nanoid'
import {useSelector} from 'react-redux'
import AppDetailed from './AppDetailed'
import '../../styles/ViewAllApps.css'


function ApprovedAppsContainer() {
    const acceptedApps = useSelector(state=>state.getAppsFromDB.acceptedApps)
    return (
    <div className="ApprovedApps">
    {acceptedApps.length ? acceptedApps.map((app) => 
    <AppDetailed app={app} key={nanoid()} />) : <h2>No Approved Applications</h2>
    }
    </div>
)
}

export default ApprovedAppsContainer
