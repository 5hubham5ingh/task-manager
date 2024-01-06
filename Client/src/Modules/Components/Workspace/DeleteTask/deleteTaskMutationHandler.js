import { useDeleteTaskMutation } from "../../../Queries/workspaceQueries";



export default function useDeleteTaskMutationHandler(taskId){
    const deleteTaskMutation = useDeleteTaskMutation();



    return () => deleteTaskMutation.mutate(taskId);
}