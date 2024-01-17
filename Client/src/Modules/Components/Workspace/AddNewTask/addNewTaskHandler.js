import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useAddNewTaskMutation } from "../../../Queries/workspaceQueries";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import {snackbarActions} from "../../../Features/Snackbar/snackbarSlice";
import { useUser } from "../../../Features/User/userSelectors";
import useWatchNetworkConnection from "../../../Hooks/watchNetworkConnection";

export default function AddNewTaskHandler({ children }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { workspaceId } = useParams();
  const taskToAdd = useRef();
  const user= useUser();

  const callbacks = {
    onSuccess: ({ data: newTask }) => {
      dispatch(
        snackbarActions.showSnackbar({
          message: "Task added successfully",
          severity: "success",
        })
      );
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
        snackbarActions.showSnackbar({
          message: "Failed to add new task",
          severity: "error",
        })
      );
    },
  };

  const addNewTaskMutation = useAddNewTaskMutation(workspaceId, callbacks);
  useWatchNetworkConnection(addNewTaskMutation);

  const addNewTask = (newTask, onSuccess) => {
    const task = {
      body: newTask,
      isCompleted: false,
      completedBy: "",
      createdBy: { id: user._id, name: user.userName },
    };
    taskToAdd.current = task;
    addNewTaskMutation.mutate(task, {
      onSuccess,
    });
  };

  return children({ addNewTask });
}
