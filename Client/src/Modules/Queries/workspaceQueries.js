import { WORKSPACE } from "../ServerApi/ApiRoutes/workspace";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useServer from "../Hooks/useServer";
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

export const useAddNewTaskMutation = () => {
  const request = useServer();
  const { workspaceId } = useParams();
  const taskToAdd = useRef();
  const queryClient = useQueryClient();

  async function addNewTask(task) {
    taskToAdd.current = task;
    return await request({
      url: `${WORKSPACE}/${workspaceId}`,
      method: "post",
      data: task,
    });
  }

  function onSuccess(newTask) {
    const taskAdded = {
      _id: newTask._id,
      ...taskToAdd.current,
    };
    queryClient.setQueryData(["workspace", workspaceId], (workspace) => {
      return {
        ...workspace,
        data: [...workspace.data, taskAdded],
      };
    });
  }

  return useMutation({
    mutationFn: addNewTask,
    onSuccess,
  });
};

export const useDeleteTaskMutation = () => {
  const request = useServer();
  const { workspaceId } = useParams();
  const queryClient = useQueryClient();
  let taskId;
  async function deleteTask(currentTaskId) {
    taskId = currentTaskId;
    return await request({
      url: `${WORKSPACE}/${workspaceId}/${currentTaskId}`,
      method: "delete",
    });
  }

  function onSuccess() {
    queryClient.setQueryData(["workspace", workspaceId], (workspace) => {
      return {
        ...workspace,
        data: workspace.data.filter((task) => task._id !== taskId),
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

  async function completeTask(currentTaskId, completedBy) {
    return await request({
      url: `${WORKSPACE}/${workspaceId}/${currentTaskId}`,
      method: "patch",
      data: completedBy,
    });
  }

  function onSuccess(completedTask) {
    queryClient.setQueryData(["workspace", workspaceId], (workspace) => {
      return {
        ...workspace,
        data: workspace.data.map((task) =>
          task._id === completeTask._id ? completedTask : task
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
