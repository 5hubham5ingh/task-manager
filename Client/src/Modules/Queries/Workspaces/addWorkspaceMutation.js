
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { WORKSPACES } from "../../ApiRoutes/workspaces";
import request from "../../Utils/AxiosApi";




export const useAddWorkspace = (closeModal) => {
  
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
  