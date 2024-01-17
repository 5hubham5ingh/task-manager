import { useAddWorkspace } from "../../../Queries/Workspaces/addWorkspaceMutation";
import useWatchNetworkConnectivity from "../../../Hooks/watchNetworkConnection";
import { useDispatch } from "react-redux";
import { snackbarActions } from "../../../Features/Snackbar/snackbarSlice";


export default function AddNewWorkspaceHandler({
  children,
  closeModal,
  ...rest
}) {
  const mutation = useAddWorkspace(closeModal);
  const dispatch = useDispatch();
  useWatchNetworkConnectivity(mutation);


  const onSuccess = () => {
    dispatch(
      snackbarActions.showSnackbar({
        message: "Workspace added successfully",
        severity: "success",
      })
    );
  };

  const onError = () => {
    dispatch(
      snackbarActions.showSnackbar({
        message: "Error adding workspace",
        severity: "error",
      })
    );
  }

  const callbacks = {
    onSuccess,
    onError,
  };


  const props = {
    handleSubmit: (workspace) => mutation.mutate(workspace,callbacks),
    isAddingNewWorkspace: mutation.isPending,
    closeModal,
    ...rest,
  };

  return children({ ...props });
}
