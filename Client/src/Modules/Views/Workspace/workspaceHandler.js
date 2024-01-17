import { useParams } from "react-router-dom";
import Retry from "../../Components/Common/Retry";
import useWatchNetworkConnection from "../../Hooks/watchNetworkConnection";
import { useWorkspace } from "../../Queries/Workspace/workspaceQuery";

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
