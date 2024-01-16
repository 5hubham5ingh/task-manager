import { useAddWorkspace } from "../../../Queries/workspacesQueries";
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

  mutation.error &&
    dispatch(
      snackbarActions.showSnackbar({
        message: mutation.error.message,
        severity: "error",
      })
    );

  const props = {
    handleSubmit: mutation.mutate,
    isAddingNewWorkspace: mutation.isLoading,
    closeModal,
    ...rest,
  };

  return children({ ...props, ...rest });
}
