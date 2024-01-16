import { useUser } from "../../../Features/User/userSelectors";
import { useTaskCompleteMutation } from "../../../Queries/workspaceQueries";


export default function CompleteTaskHandler({children,taskId}){
    const completeTaskMutation = useTaskCompleteMutation();
    const user = useUser();
    const completedBy = {
      isCompleted: true,
      completedBy: user.userName,
    };
  
    const taskComplete = () => completeTaskMutation.mutate({ taskId, completedBy });
  
    return children({taskComplete})
}