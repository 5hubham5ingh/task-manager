import { useDispatch } from "react-redux";
import { useAddNewTaskMutation } from "../../../Queries/workspaceQueries";
import { showSnackbar } from "../../Snackbar/snackbarSlice";
import { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useAddNewTaskMutationHandler() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { workspaceId } = useParams();
  const taskToAdd = useRef();
  const callbacks = {
    onSuccess: ({ data: newTask }) => {
        dispatch(
          showSnackbar({
            message: "Task added successfully",
            severity: "success",
          })
        )
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
    },
    onError: () => {
      dispatch(
        showSnackbar({
          message: "Failed to add new task",
          severity: "error",
        })
      );
    },
  };

  const addNewTaskMutation = useAddNewTaskMutation(callbacks);

  setTimeout(
    () =>
      addNewTaskMutation.isPaused &&
      dispatch(
        showSnackbar({
          message: "Waiting for internet connection",
          severity: "info",
          autoHideDuration: 1000000000,
        })
      ),
    1000
  );

  return (task, additionalCallbacks) => {
    taskToAdd.current = task;
    addNewTaskMutation.mutate(task, additionalCallbacks);
  };
}
