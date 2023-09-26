
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { useTheme } from './Component/Theme/Theme';
import { useNavigate } from 'react-router-dom';


export default function WorkSpaceCard({ workSpace }) {
    const {theme} = useTheme();
    const navigate = useNavigate()

    const openWorkSpace = ()=>{
        navigate(`/TaskManager?id=${workSpace._id}`)
    }
    return (
        <Card sx={{ minWidth: 250, backgroundImage:`linear-gradient(${theme},rgb(140, 140, 243))` }} >
            <CardContent onClick={openWorkSpace}>
                <Typography variant='h4'>{workSpace.name}</Typography>
                <Typography variant='p'>{workSpace.createdBy}</Typography>
                <Divider sx={{ borderColor: 'black' }} />
                <Typography variant='subtitle2'>Description: <Typography variant='p'>{workSpace.description}</Typography></Typography>
                <Typography variant='subtitle2'>Participents: {workSpace.participents.map((name) => <Typography variant='p'> {`${name}, `} </Typography>)} </Typography>
            </CardContent>
        </Card>
    );
}