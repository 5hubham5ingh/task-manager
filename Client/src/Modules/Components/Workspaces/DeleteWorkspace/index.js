import DeleteWorkspace from "./DeleteWorkspace";
import DeleteWorkspaceHandler from "./deleteWorkspaceHandler";

export default function DeleteWorkspaceButton(props) {
  return (
    <DeleteWorkspaceHandler {...props}>
      {(props) => <DeleteWorkspace {...props} />}
    </DeleteWorkspaceHandler>
  );
}
