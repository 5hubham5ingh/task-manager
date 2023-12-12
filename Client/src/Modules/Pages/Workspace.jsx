import { CircularProgress, Stack, Typography } from "@mui/material";
import { BackGround } from "../Components/Background";
import { bodyStyle, headingStyle } from "../Styles/Workspace";
import { useWorkspace } from "../Queries/workspaceQueries";
import AddNewTask from "../Components/Workspace/AddNewTask";
import Task from "../Components/Workspace/Task";

function Workspace() {
  const workspaceQuery = useWorkspace();

  if (workspaceQuery.isError) return <h4>Failed to load tasks.</h4>;

  if (workspaceQuery.isLoading) return <CircularProgress />;

  const tasks = workspaceQuery.data;

  return (
    <BackGround itemAlignment="center">
      {/* Body */}
      <Stack direction="column" sx={bodyStyle}>
        {/* heading */}
        <Typography variant="h4" sx={headingStyle}>
          Tasks
        </Typography>

        {/* Content */}
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <Stack
              key={task._id}
              direction="row"
              spacing="1vw"
              margin="1vw"
              sx={{ alignItems: "center" }}
            >
              <Task task={task} />
            </Stack>
          ))
        ) : (
          <Typography variant="h6">No tasks added.</Typography>
        )}

        {/* Footer */}
        <AddNewTask />
      </Stack>
    </BackGround>
  );
}

export default Workspace;
