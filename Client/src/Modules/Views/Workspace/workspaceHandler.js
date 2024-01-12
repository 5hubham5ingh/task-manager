import { useDispatch } from "react-redux";
import { useWorkspace } from "../../Queries/workspaceQueries";
import { useParams } from "react-router-dom";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice";

export default function WorkspaceHandler({ children }) {
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

  return children({
    task: workspaceQuery.data,
    isLoading: workspaceQuery.isLoading,
  });
}
