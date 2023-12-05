import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "./Theme/Theme";
import { useNavigate } from "react-router-dom";

import DeleteWorkspace from "./DeleteWorkspace";

export default function WorkSpaceCard({ workSpace, removeWorkSpace }) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const openWorkSpace = () => {
    navigate(`/TaskManager/${workSpace._id}`);
  };

  return (
    <Card
      sx={{
        backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))`,
        minHeight: "200px",
        position: "relative",
      }}
    >
      <CardContent onClick={openWorkSpace}>
        <Typography variant="h4">{workSpace.name}</Typography>
        <Typography variant="subtitle2">
          Created by: {workSpace.owner.userName}
        </Typography>
        <Divider sx={{ borderColor: "black" }} />
        <Typography variant="h6">Description: </Typography>
        <Typography variant="subtitle2" paragraph={true} sx={{ width: "100%" }}>
          {workSpace.description}
        </Typography>
        <Typography variant="h6">Participants: </Typography>
        <Typography variant="p" paragraph={true} sx={{ width: "100%" }}>
          {workSpace.participants.map(
            (participant, index, array) =>
              `${participant.userName}${index === array.length - 1 ? "" : ","} `
          )}
        </Typography>
      </CardContent>
      <DeleteWorkspace workspaceId={workSpace._id} />
    </Card>
  );
}
