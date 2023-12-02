import { WORKSPACES } from "../ServerApi/ApiRoutes/workspace";
import { useQuery, useQueryClient, useParams } from "@tanstack/react-query";

const queryClient = useQueryClient();

export const useWorkspace = (workspaceId, setWorksapce) => {
  const request = useServer();
  const { workspaceId } = useParams();

  async function fetchWorkspace({ queryKey }) {
    const workspaceId = queryKey[1];
    return await request({
      url: `${WORKSPACES}/${workspaceId}`,
      method: "get",
    });
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
  const { workspaceId } = useParams();
  const taskToAdd = useRef();
  async function addNewTask(task) {
    taskToAdd.current = task;
    return await request({
      url: `${WORKSPACES}/${workspaceId}`,
      method: "post",
      data: task,
    });
  }

  function onSuccess(newTask) {
    const taskAdded = {
      _id: newTask._id,
      ...taskToAdd.current,
    };
    queryClient.setQueryData(["workspace", workspaceId], oldTasks => [
      ...oldTasks,
      taskAdded,
    ]);
  }

  return useMutation({
    mutationFn: addNewTask,
    onSuccess,
  });
};

export const useDeleteTaskMutation = () => {
  const request = useServer();
  const { workspaceId } = useParams();
  let taskId;
  async function deleteTask(currentTaskId) {
    taskId = currentTaskId;
    return await request({
      url: `${WORKSPACES}/${workspaceId}/${currentTaskId}`,
      method: "delete",
    });
  }

  function onSuccess() {
    queryClient.setQueryData(["workspace", workspaceId], oldTasks => oldTasks.filter(task => task._id !== taskId));
  }

  return useMutation({
    mutationFn: deleteTask,
    onSuccess,
    onError: ()=>console.log("Error in delete task mutation")
  });
};

export const useTaksCompleteMutation = () => {
  const request = useServer();
  const { workspaceId } = useParams();
  async function completeTask(currentTaskId,completedBy) {
    taskId = currentTaskId;
    return await request({
      url: `${WORKSPACES}/${workspaceId}/${currentTaskId}`,
      method: "patch",
      data: completedBy
    });
  }

  function onSuccess(completedTask) {
    queryClient.setQueryData(["workspace", workspaceId], oldTasks => oldTasks.map(task => (task._id === completeTask._id? completeTask : task)));
  }

  return useMutation({
    mutationFn: completeTask,
    onSuccess,
    onError: ()=>console.log("Error in complete task mutation")
  });
}
