import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import WorkspaceCard from "../../Components/Workspaces/workspaceCard";
import { useTheme } from "../../Components/Theme/Theme";
import Masonry from "@mui/lab/Masonry";
import { BackGround } from "../../Components/Common/Background";
import { AddNewWorkspaceModal } from "../../Components/Workspaces/AddNewWorkspaceModal";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Workspaces({ workspaces, refetch}) {
  const [isAddingNewWorkspace, setAddingNewWorkspace] = useState(false);
  const { theme } = useTheme();
  const closeAddNewWorkspaceModal = () => setAddingNewWorkspace(false);


  return (
    <>
      <BackGround>
        <Masonry
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={4}
          sx={{ margin: 5 }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            md={3}
            key={100}
            sx={{
              backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))`,
              p: "40px",
            }}
            onClick={() => setAddingNewWorkspace(true)}
          >
            <Typography variant="h7">Add new Work space.</Typography>
            <span>➕</span>
          </Stack>
          {!workspaces.length ? <div style={selfAlignCenter}>No Workspace found.</div> :
            workspaces.map((workspace) => {
              return (
                <WorkspaceCard key={workspace._id} workspace={workspace} />
              );
            })}
        </Masonry>
        <RefreshIcon color="blue" sx={style} onClick={() => refetch()} />
      </BackGround>
      {isAddingNewWorkspace && (
        <AddNewWorkspaceModal closeModal={closeAddNewWorkspaceModal} />
      )}
    </>
  );
}

const style = { position: "absolute", right: "1%", bottom: "1%" };
const selfAlignCenter = {
  position: 'fixed',
  top: '50%',
  left: '45%',
}