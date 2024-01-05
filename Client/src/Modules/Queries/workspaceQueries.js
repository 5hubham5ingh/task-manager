import { WORKSPACE } from "../ApiRoutes/workspace";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useServer from "../Utils/AxiosApi";
import { useRef } from "react";

export const useWorkspace = () => {
  const request = useServer();
  const { workspaceId } = useParams();

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

export const useAddNewTaskMutation = (callbacks) => {
  const request = useServer();
  const { workspaceId } = useParams();
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
  const request = useServer();
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
    console.log("success deletion",taskId.current)
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
    onError: () => console.log("Error in delete task mutation"),
  });
};

export const useTaksCompleteMutation = () => {
  const request = useServer();
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
