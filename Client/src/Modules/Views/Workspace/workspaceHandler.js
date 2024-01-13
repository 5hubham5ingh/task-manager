import { useDispatch } from "react-redux";
import { useWorkspace } from "../../Queries/workspaceQueries";
import { useParams } from "react-router-dom";
import { showSnackbar } from "../../Components/Snackbar/snackbarSlice";
import useWatchNetworkConnection from "../../Hooks/watchNetworkConnection";

export default function WorkspaceHandler({ children }) {
  const { workspaceId } = useParams();
  const workspaceQuery = useWorkspace(workspaceId);
  const dispatch = useDispatch();
  useWatchNetworkConnection(workspaceQuery);
  
  if (workspaceQuery.isError) {
    dispatch(
      showSnackbar({
        message: workspaceQuery.error.message,
        severity: "error",
      })
    );
  }

  if(workspaceQuery.isLoading) {
    return <div>Loading...</div>
  }



  if(workspaceQuery.isSuccess)
  return children({
    tasks: workspaceQuery.data,
  });
}
