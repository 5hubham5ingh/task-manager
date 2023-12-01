import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WORKSPACES } from "../ServerApi/ApiRoutes/workspace";
import useServer from "../Hooks/useServer";
import { useRef } from "react";

export const useWorkspaces = (userId, onWorkspacesSuccess) => {
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
    onSuccess: onWorkspacesSuccess,
  });
};

export const useAddWorkspace = ()=>{
  const request = useServer();
  const {userId} = useParams();
  const queryClient = useQueryClient();
  const workspaceToAdd = useRef();
  async function addWorkspace(workspace) {
    workspaceToAdd.current = workspace;
    return await request({ url: `${WORKSPACES}/${userId}`, method: "post", data: workspace });
  }

  function onSuccess(newWorkspace){
    const workspaceAdded = {
      _id: newWorkspace._id,
      ...workspaceToAdd.current
    }
    queryClient.setQueryData(["workspaces",userId],(oldWorkspaces)=> [...oldWorkspaces,workspaceAdded]);
  }

  const mutate =  useMutation({
    mutationFn: addWorkspace,
    onSuccess,
    onError
  });

  return mutate;
}
