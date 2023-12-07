import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DELETE, WORKSPACES } from "../ServerApi/ApiRoutes/workspaces";
import useServer from "../Hooks/useServer";
import { useRef } from "react";
import { useParams } from "react-router-dom";

export const useWorkspaces = () => {
  const request = useServer();
  const { userId } = useParams();

  async function fetchWorkspaces({ queryKey }) {
    const userId = queryKey[1];
    return await request({ url: `${WORKSPACES}/${userId}`, method: "get" });
  }

  return useQuery({
    queryKey: ["workspaces", userId],
    queryFn: fetchWorkspaces,
    refetchOnMount: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnWindowBlur: false,
    enabled: true,
    staleTime: 1000 * 60,
    select: (Data) => Data.data,
  });
};

export const useAddWorkspace = (closeModal) => {
  const request = useServer();
  const { userId } = useParams();
  const queryClient = useQueryClient();
  const workspaceToAdd = useRef();
  async function addWorkspace(workspace) {
    workspaceToAdd.current = workspace;
    return await request({
      url: `${WORKSPACES}/${userId}`,
      method: "post",
      data: workspace,
    });
  }

  function onSuccess(newWorkspace) {
    const workspaceAdded = {
      _id: newWorkspace.data._id,
      ...workspaceToAdd.current,
    };
    queryClient.setQueryData(["workspaces", userId], (oldWorkspaces) => {
      closeModal && closeModal();
      return {
        ...oldWorkspaces,
        data: [...oldWorkspaces.data, workspaceAdded],
      };
    });
  }

  return useMutation({
    mutationFn: addWorkspace,
    onSuccess,
  });
};

export const useDeleteWorkspace = () => {
  const request = useServer();
  const queryClient = useQueryClient();
  const { userId } = useParams();
  const workspaceToDelete = useRef();

  const deleteWorkspace = (workspaceId) => {
    workspaceToDelete.current = workspaceId;
    return request({
      url: `${DELETE}/${userId}/${workspaceId}`,
      method: "delete",
    });
  };

  const onSuccess = () => {
    queryClient.setQueryData(["workspaces", userId], (oldWorkspaces) => {
      return {
        ...oldWorkspaces,
        data: oldWorkspaces.data.filter(
          (workspace) => workspace._id !== workspaceToDelete.current
        ),
      };
    });
  };

  return useMutation({
    mutationFn: deleteWorkspace,
    onSuccess,
  });
};
