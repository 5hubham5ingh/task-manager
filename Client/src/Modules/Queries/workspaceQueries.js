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

export const useAddNewTaskMutation = (onSuccessfullTaskDeletion) => {
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

  function onSuccess(response) {
    const {data: newTask} = response;
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
    onSuccessfullTaskDeletion();
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

  function onSuccess(response) {
    const {data:completedTask} = response;
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
