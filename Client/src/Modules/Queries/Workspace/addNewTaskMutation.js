import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { WORKSPACE } from "../../ApiRoutes/workspace";
import request from "../../Utils/AxiosApi";









export const useAddNewTaskMutation = (workspaceId,callbacks) => {
  
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