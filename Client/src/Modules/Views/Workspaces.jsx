import { useState } from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";
import WorkspaceCard from "../Components/Workspaces/workspaceCard";
import { useTheme } from "../Components/Theme/Theme";
import Masonry from "@mui/lab/Masonry";
import { BackGround } from "../Components/Background";
import { AddNewWorkspaceModal } from "../Components/Workspaces/AddNewWorkspaceModal";
import { useWorkspaces } from "../Queries/workspacesQueries";
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Workspaces() {
  const [isAddingNewWorkspace, setAddingNewWorkspace] = useState(false);
  const { theme } = useTheme();
  const workspacesQuery = useWorkspaces();
 
  if(workspacesQuery.isError) return <h5>Error while fetching workspaces.</h5>;
  if(workspacesQuery.isLoading) return <CircularProgress/>;

  let workspaces = workspacesQuery.data;
  
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

          {workspaces &&
            workspaces.map((workspace) => {
              return (
                <WorkspaceCard
                  key={workspace._id}
                  workspace={workspace}
                />
              );
            })}
        </Masonry>
        {workspacesQuery.isRefetching ? <CircularProgress sx={style}/> : <RefreshIcon color="blue" sx={style} onClick={()=>workspacesQuery.refetch()}/>}
      </BackGround>
      {isAddingNewWorkspace && (
        <AddNewWorkspaceModal
          closeModal={closeAddNewWorkspaceModal}
        />
      )}
    </>
  );
}

const style = {position:'absolute',right:'1%',bottom:'1%'};