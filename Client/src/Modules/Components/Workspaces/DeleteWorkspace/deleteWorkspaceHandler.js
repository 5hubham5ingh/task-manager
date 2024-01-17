import { useDispatch } from "react-redux";
import { snackbarActions } from "../../../Features/Snackbar/snackbarSlice";
import { useDeleteWorkspace } from "../../../Queries/Workspaces/deleteWorkspaceMutation";


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
