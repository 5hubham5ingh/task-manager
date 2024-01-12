import WorkspacesHandler from "./workspacesHandler";
import Workspaces from "./Workspaces"; 


export default function WorkspacesView(){

    return (<WorkspacesHandler>
        {props => <Workspaces {...props} />}
    </WorkspacesHandler>)
}