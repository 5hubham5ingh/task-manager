import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { DELETE } from "../../ApiRoutes/workspaces";
import request from "../../Utils/AxiosApi";






export const useDeleteWorkspace = () => {
  
    const queryClient = useQueryClient();
    const { userId } = useParams();
    const workspaceToDelete = useRef();
  
    async function deleteWorkspace(workspaceId){
      workspaceToDelete.current = workspaceId;
      return await request({
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
  