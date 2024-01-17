import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { WORKSPACE } from "../../ApiRoutes/workspace";
import request from "../../Utils/AxiosApi";









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