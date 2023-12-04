import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WORKSPACES } from "../ServerApi/ApiRoutes/workspace";
import useServer from "../Hooks/useServer";
import { useRef } from "react";
import { useParams } from "react-router-dom";

export const useWorkspaces = (userId) => {
  const request = useServer();

  async function fetchWorkspaces({ queryKey }) {
    const userId = queryKey[1];
    return await request({ url: `${WORKSPACES}/${userId}`, method: "get" });
  }

  return useQuery({
    queryKey: ["workspaces", userId],
    queryFn: fetchWorkspaces,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnWindowBlur: false,
    enabled: true,
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
