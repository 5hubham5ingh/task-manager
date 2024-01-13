import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useAddNewTaskMutation } from "../../../Queries/workspaceQueries";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import {showSnackbar} from "../../../Features/Snackbar/snackbarSlice";
import { useUser } from "../../../Features/User/userSlice";

export default function AddNewTaskHandler({ children }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { workspaceId } = useParams();
  const taskToAdd = useRef();
  const user= useUser();

  const callbacks = {
    onSuccess: ({ data: newTask }) => {
      dispatch(
        showSnackbar({
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
        showSnackbar({
          message: "Failed to add new task",
          severity: "error",
        })
      );
    },
  };

  const addNewTaskMutation = useAddNewTaskMutation(workspaceId, callbacks);

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
