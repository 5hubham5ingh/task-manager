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

  export const useAddNewTaskMutation = () => {
    const request = useServer();
    const {workspaceId} = useParams();
    const taskToAdd = useRef();
    async function addNewTask(task) {
      taskToAdd.current = task;
      return await request({ url: `${WORKSPACES}/${workspaceId}`, method: "post", data: task });
    }

    function onSuccess(newTask) {
      const taskAdded = {
        _id: newTask._id,
      ...taskToAdd.current
      }
      queryClient.setQueryData(["workspace",workspaceId],(oldTasks)=> [...oldTasks,taskAdded]);
    }

    return useMutation({
      mutationFn: addNewTask,
      onSuccess,
    });
  }
