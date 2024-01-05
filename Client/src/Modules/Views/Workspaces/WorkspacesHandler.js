import { useDispatch } from "react-redux";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice";
import { useWorkspaces } from "../../Queries/workspacesQueries";

export default function useWorkspacesHandler() {
  const workspacesQuery = useWorkspaces();
  const dispatch = useDispatch();

  if(workspacesQuery.isRefetching) dispatch(showSnackbar({ severity: "info", message: "Refreshing..." }))

  if (workspacesQuery.isError) {
    dispatch(
      showSnackbar({
        severity: "error",
        message: workspacesQuery.error.message,
      })
    );
  }

  setTimeout(
    () =>
      workspacesQuery.isPaused &&
      dispatch(
        showSnackbar({
          message: "Waiting for internet connection",
          severity: "info",
          autoHideDuration: 1000000000,
        })
      ),
    1000
  );

  return {
    data: workspacesQuery.data,
    refetch: workspacesQuery.refetch,
    isLoading: workspacesQuery.isLoading,
  };
  
}
