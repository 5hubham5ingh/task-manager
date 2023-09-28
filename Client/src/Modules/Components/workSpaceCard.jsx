
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from './Theme/Theme';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WorkSpaceCard({ workSpace }) {
    const { theme } = useTheme();
    const navigate = useNavigate()

    const openWorkSpace = () => {
        navigate(`/TaskManager?id=${workSpace._id}`)
    }
    return (
        <Card sx={{ backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))`, minHeight: '200px' }} >
            <CardContent onClick={openWorkSpace}>
                <Typography variant='h4'>{workSpace.name}</Typography>
                <Typography variant='subtitle2'> Created by: {workSpace.createdBy}</Typography>
                <Divider sx={{ borderColor: 'black' }} />
                <Typography variant='h6' >Description: </Typography>
                <Typography variant='subtitle2' paragraph={true} sx={{ width: '100%' }}> {workSpace.description}</Typography>
                <Typography variant='h6' >Participants: </Typography>
                <Typography variant='p' paragraph={true} sx={{ width: '100%' }} > {workSpace.participants.map((name) => `${name}, `)} <DeleteIcon /></Typography>
               
            </CardContent>
        </Card>
    );
}