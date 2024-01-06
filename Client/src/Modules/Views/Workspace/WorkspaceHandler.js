import { useDispatch } from "react-redux";
import { useWorkspace } from "../../Queries/workspaceQueries";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice";
import { useParams } from "react-router-dom";

export default function useWorkspaceHandler() {
  const { workspaceId } = useParams();
  const workspaceQuery = useWorkspace(workspaceId);
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
