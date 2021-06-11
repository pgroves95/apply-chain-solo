import UnreadAppsContainer from './UnreadAppsContainer'
import ApprovedAppsContainer from './ApprovedAppsContainer'
import '../../styles/ViewAllApps.css'

function ViewAllApps() {
    
    return(
        <div className="ViewContainer">
            <h1 className="UnreadHeader">Unread Applications</h1>
            <h1 className="ApprovedHeader">Approved Applications</h1>
            <div><UnreadAppsContainer /></div>
            <div><ApprovedAppsContainer /></div>
            <div></div>
            
        </div>
    )

}

export default ViewAllApps



