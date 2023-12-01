import { WORKSPACES } from "../ServerApi/ApiRoutes/workspace";


export const useWorkspace = (workspaceId,setWorksapce) => {
    const request = useServer();
    const {workspaceId} = useParams();
  
    const workspace = useRef();
    async function fetchWorkspace({ queryKey }) {
      const workspaceId = queryKey[1];
      return await request({ url: `${WORKSPACES}/${workspaceId}`, method: "get" });
    }

    return useQuery({
      queryKey: ["workspace", workspaceId],
      queryFn: fetchWorkspace,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchOnWindowBlur: false,
      enabled: true,
      onSuccess: (data) => setWorksapce(data),
    });
  };
