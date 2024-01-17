import { WORKSPACE } from "../ApiRoutes/workspace";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router"
import request from "../Utils/AxiosApi";
import { useRef } from "react";

export const useWorkspace = (workspaceId) => {
  
  

  async function fetchWorkspace({ queryKey }) {
    const workspaceId = queryKey[1];
    return await request({
      url: `${WORKSPACE}/${workspaceId}`,
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
    select: Data => Data.data,
    enabled: true,
  });
};

export const useAddNewTaskMutation = (workspaceId,callbacks) => {
  
  const taskToAdd = useRef();

  async function addNewTask(task) {
    taskToAdd.current = task;
    return await request({
      url: `${WORKSPACE}/${workspaceId}`,
      method: "post",
      data: task,
    });
  }

  return useMutation({
    mutationFn: addNewTask,
    ...callbacks
  });
};

export const useDeleteTaskMutation = () => {
  
  const { workspaceId } = useParams();
  const queryClient = useQueryClient();
  const taskId = useRef();
  async function deleteTask(currentTaskId) {
    taskId.current = currentTaskId;
    return await request({
      url: `${WORKSPACE}/${workspaceId}/${currentTaskId}`,
      method: "delete",
    });
  }

  function onSuccess() {
    queryClient.setQueryData(["workspace", workspaceId], (workspace) => {
      return {
        ...workspace,
        data: workspace.data.filter((task) => task._id !== taskId.current),
      };
    });
  }

  return useMutation({
    mutationFn: deleteTask,
    onSuccess,
  });
};

export const useTaskCompleteMutation = () => {
  
  const { workspaceId } = useParams();
  const queryClient = useQueryClient();

  async function completeTask( {taskId, completedBy} ) {
    return await request({
      url: `${WORKSPACE}/${workspaceId}/${taskId}`,
      method: "patch",
      data: completedBy,
    });
  }

  function onSuccess({data:completedTask}) {
    queryClient.setQueryData(["workspace", workspaceId], (workspace) => {
      return {
        ...workspace,
        data: workspace.data.map((task) =>
          task._id === completedTask._id ? completedTask : task
        ),
      };
    });
  }

  return useMutation({
    mutationFn: completeTask,
    onSuccess,
    onError: () => console.log("Error in complete task mutation"),
  });
};
