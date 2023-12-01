
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from './Theme/Theme';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { DELETE } from '../ServerApi/ApiRoutes/workspace';
import { useUser } from '../Authentication/User/userSlice';
import serverApi from '../ServerApi/api'

export default function WorkSpaceCard({ workSpace, removeWorkSpace }) {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const {_id: userId} = useUser();
    const [deletingWorkspace, setDeletingWorkspace] = useState(false);
    
    const openWorkSpace = () => {
        navigate(`/TaskManager/${workSpace._id}`)
    }

    const deleteWorkSpace = async ()=>{
        setDeletingWorkspace(true);
       try{
        await serverApi.delete(`${DELETE}/${userId}/${workSpace._id}`);
        removeWorkSpace(workSpace._id)}
        catch(error){
            console.log("error while deleting workspace")
        }
       
    }
    return (
        <Card sx={{ backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))`, minHeight: '200px',position:'relative' }} >
            <CardContent onClick={openWorkSpace} >
                <Typography variant='h4'>{workSpace.name}</Typography>
                <Typography variant='subtitle2'> Created by: {workSpace.owner.userName}</Typography>
                <Divider sx={{ borderColor: 'black' }} />
                <Typography variant='h6' >Description: </Typography>
                <Typography variant='subtitle2' paragraph={true} sx={{ width: '100%' }}> {workSpace.description}</Typography>
                <Typography variant='h6' >Participants: </Typography>
                <Typography variant='p' paragraph={true} sx={{ width: '100%', }} > {workSpace.participants.map((participant,index,array) => `${participant.userName}${index === array.length - 1 ?'':',' } `)}</Typography>
            </CardContent>
                {!deletingWorkspace ? <DeleteIcon sx={{position:'absolute',right:'5%',bottom:'5%'}} onClick={deleteWorkSpace}/> : 'Deleting...'}
        </Card>
    );
}