
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useParams } from "react-router";
import { WORKSPACE } from "../../ApiRoutes/workspace";
import request from "../../Utils/AxiosApi";









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