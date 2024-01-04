import { useDispatch } from "react-redux";
import { useWorkspace } from "../../Queries/workspaceQueries";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice";

export default function useWorkspaceHandler() {
  const workspaceQuery = useWorkspace();
  const dispatch = useDispatch();

  if (workspaceQuery.isError) {
    dispatch(
      showSnackbar({
        message: workspaceQuery.error.message,
        severity: "error",
      })
    );
  }

  return {
    data: workspaceQuery.data,
    isLoading: workspaceQuery.isLoading,
  };
}
