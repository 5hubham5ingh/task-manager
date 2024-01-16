import { useDeleteTaskMutation } from "../../../Queries/workspaceQueries";


export default function DeleteTaskHandler({children,task}){
    const deleteTaskMutation = useDeleteTaskMutation();



    const deleteTask = () => deleteTaskMutation.mutate(task._id);

    return children({deleteTask, task})
}