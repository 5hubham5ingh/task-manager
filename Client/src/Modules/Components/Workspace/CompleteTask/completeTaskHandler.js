import { useDispatch } from "react-redux";
import { useUser } from "../../../Features/User/userSelectors";
import { useTaskCompleteMutation } from "../../../Queries/workspaceQueries";
import { snackbarActions } from "../../../Features/Snackbar/snackbarSlice";


export default function CompleteTaskHandler({children,taskId}){
    const completeTaskMutation = useTaskCompleteMutation();
    const user = useUser();
    const dispatch = useDispatch();
    const completedBy = {
      isCompleted: true,
      completedBy: user.userName,
    };

    const onSuccess = ()=>{
      dispatch(snackbarActions.showSnackbar({
        message: "Task Completed",
        severity: "success",
      }))
    }

    const onError =  ()=>{
      dispatch(snackbarActions.showSnackbar({
        message: "Failed to complete task",
        severity: "error",
      }))
    }

    const callbacks = {
      onSuccess,
      onError,
    };
  
    const taskComplete = () => completeTaskMutation.mutate({ taskId, completedBy }, callbacks);
  
    return children({taskComplete})
}