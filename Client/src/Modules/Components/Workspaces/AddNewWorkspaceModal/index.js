import AddNewWorkspaceHandler from "./AddNewWorkspaceHandler";
import AddNewWorkspaceValidationHandler from "./AddNewWorkspaceValidationHandler";
import AddNewWorkspaceForm from "./AddNewWorkspaceModal";
export default function AddNewWorkspace(props) {
  return (
    <AddNewWorkspaceHandler {...props}>
      {(props) => (
        <AddNewWorkspaceValidationHandler
          {...props}
        >
            {(props) => (
              <AddNewWorkspaceForm {...props} />
            )}
        </AddNewWorkspaceValidationHandler>
      )}
    </AddNewWorkspaceHandler>
  );
}
