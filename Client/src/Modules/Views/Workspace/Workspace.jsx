import { CircularProgress, Stack, Typography } from "@mui/material";
import { BackGround } from "../../Components/Common/Background";
import { bodyStyle, headingStyle } from "../../Styles/Workspace";
import AddNewTask from "../../Components/Workspace/AddNewTask/index";
import Task from "../../Components/Workspace/Task";

function Workspace({tasks} ) {

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
