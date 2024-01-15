import { useUser } from "../../../Features/User/userSelectors";
import {useTaskCompleteMutation} from "../../../Queries/workspaceQueries"

export default function useCompleteTaskMutationHandler(taskId){

  const completeTaskMutation = useTaskCompleteMutation();
  const user = useUser();
  const completedBy = {
    isCompleted: true,
    completedBy: user.userName,
  };

  return () => completeTaskMutation.mutate({ taskId, completedBy });
}