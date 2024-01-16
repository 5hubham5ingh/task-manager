import { useDispatch } from "react-redux";
import { useDeleteTaskMutation } from "../../../Queries/workspaceQueries";
import {snackbarActions} from "../../../Features/Snackbar/snackbarSlice";

export default function DeleteTaskHandler({ children, task }) {
  const deleteTaskMutation = useDeleteTaskMutation();
  const dispatch = useDispatch();
  deleteTaskMutation.isSuccess &&
    dispatch(
      snackbarActions.showSnackbar({
        message: "Task deleted successfully",
        severity: "success",
      })
    );

  const deleteTask = () => deleteTaskMutation.mutate(task._id);

  return children({ deleteTask, task });
}
