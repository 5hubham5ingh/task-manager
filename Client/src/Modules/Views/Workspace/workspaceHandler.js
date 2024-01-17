import { useDispatch } from "react-redux";
import { useWorkspace } from "../../Queries/workspaceQueries";
import { useParams } from "react-router-dom";
import useWatchNetworkConnection from "../../Hooks/watchNetworkConnection";
import Retry from "../../Components/Common/Retry";

export default function WorkspaceHandler({ children }) {
  const { workspaceId } = useParams();
  const workspaceQuery = useWorkspace(workspaceId);
  useWatchNetworkConnection(workspaceQuery);

  if (workspaceQuery.isError) return <Retry onRetry={workspaceQuery.refetch} />;

  if (workspaceQuery.isLoading) return <div>Loading...</div>;

  if (workspaceQuery.isSuccess)
    return children({
      tasks: workspaceQuery.data,
    });
}
