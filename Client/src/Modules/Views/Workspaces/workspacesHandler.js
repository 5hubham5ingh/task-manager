import { useDispatch } from "react-redux";
import { useWorkspaces } from "../../Queries/workspacesQueries";
import { snackbarActions } from "../../Features/Snackbar/snackbarSlice";
import useWatchNetworkConnection from "../../Hooks/watchNetworkConnection";

export default function WorkspacesHandler({ children }) {
  const workspacesQuery = useWorkspaces();
  const dispatch = useDispatch();
  useWatchNetworkConnection(workspacesQuery);
  if (workspacesQuery.isRefetching)
    dispatch(snackbarActions.showSnackbar({ severity: "info", message: "Refreshing..." }));

  if (workspacesQuery.isError) {
    dispatch(
      snackbarActions.showSnackbar({
        severity: "error",
        message: workspacesQuery.error.message,
      })
    );
  }

  if(workspacesQuery.isLoading) return <div>Loading...</div>

  if(workspacesQuery.isSuccess)
  return children({
    workspaces: workspacesQuery.data,
    refetch: workspacesQuery.refetch,
  });
}
