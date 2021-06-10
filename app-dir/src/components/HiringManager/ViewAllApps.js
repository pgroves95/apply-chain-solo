import UnreadAppsContainer from './UnreadAppsContainer'
import UndecidedAppsContainer from './UndecidedAppsContainer'
import ApprovedAppsContainer from './ApprovedAppsContainer'
import '../../styles/ViewAllApps.css'

function ViewAllApps() {
    
    return(
        <div className="ViewContainer">
            <h1 className="UnreadHeader">Unread Applications</h1>
            <h1 className="UndecidedHeader">Undecided Applications</h1>
            <h1 className="ApprovedHeader">Approved Applications</h1>
            <div><UnreadAppsContainer /></div>
            <div><UndecidedAppsContainer /></div>
            <div><ApprovedAppsContainer /></div>
            <div></div>
            
        </div>
    )

}

export default ViewAllApps



