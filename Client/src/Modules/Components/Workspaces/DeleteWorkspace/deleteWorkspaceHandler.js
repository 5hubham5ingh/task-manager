import { useDeleteWorkspace } from "../../../Queries/workspacesQueries";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { snackbarActions } from "../../../Features/Snackbar/snackbarSlice";
export default function DeleteWorkspaceHandler({ children,workspaceId, ...rest }) {
  const deleteWorkspaceMutation = useDeleteWorkspace();
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch(
      snackbarActions.showSnackbar({
        severity: "success",
        message: "Workspace deleted successfully",
      })
    );
  };
  const onError = () => {
    dispatch(
      snackbarActions.showSnackbar({
        severity: "error",
        message: "Error deleting workspace",
      })
    );
  };

  const callbacks = {
    onSuccess,
    onError,
  };

  const deleteWorkspace = () => {
    deleteWorkspaceMutation.mutate(workspaceId, callbacks);
  };

  const props = {
    deleteWorkspace,
    isPending: deleteWorkspaceMutation.isLoading,
  };

  return children({ ...props, ...rest });
}
