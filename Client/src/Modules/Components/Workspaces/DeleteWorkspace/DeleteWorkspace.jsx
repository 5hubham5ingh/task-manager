import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteWorkspace } from '../../../Queries/workspacesQueries';
import { CircularProgress } from '@mui/material';

export default function DeleteWorkspace({workspaceId}){
    const {mutate, isPending} = useDeleteWorkspace();
    const deleteWorkspace = ()=>{
        mutate(workspaceId);
    }

    return isPending ? <CircularProgress sx={style}/> : <DeleteIcon onClick={deleteWorkspace} sx={style}/>
}

const style = {position:'absolute',right:'5%',bottom:'5%'}