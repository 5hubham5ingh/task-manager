import WorkspaceHandler from "./workspaceHandler";
import Workspace from "./Workspace";
export default function WorkspaceView() {
  return (
    <WorkspaceHandler>{(props) => 
      <Workspace {...props} />}
    </WorkspaceHandler>
  );
}
