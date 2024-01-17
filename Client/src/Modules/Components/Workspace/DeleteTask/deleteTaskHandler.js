import { useDispatch } from "react-redux";
import { useDeleteTaskMutation } from "../../../Queries/workspaceQueries";
import {snackbarActions} from "../../../Features/Snackbar/snackbarSlice";

export default function DeleteTaskHandler({ children, task }) {
  const deleteTaskMutation = useDeleteTaskMutation();
  const dispatch = useDispatch();
  const onSuccess = () =>
    dispatch(
      snackbarActions.showSnackbar({
        message: "Task deleted successfully",
        severity: "success",
      })
    )
  const onError = () =>
    dispatch(
      snackbarActions.showSnackbar({
        message: "Failed to delete task",
        severity: "error",
      })
    );

  const callbacks = {
    onSuccess,
    onError,
  };

  const deleteTask = () => deleteTaskMutation.mutate(task._id, callbacks);

  return children({ deleteTask, task });
}
