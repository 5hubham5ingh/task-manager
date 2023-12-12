import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useTheme } from "../Components/Theme/Theme";
import { BackGround } from "../Components/Background";
import {
  bodyStyle,
  headingStyle,
  tasksStyle,
  buttonStyle,
} from "../Styles/TaskManager";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../Authentication/User/userSlice";
import {
  useDeleteTaskMutation,
  useTaksCompleteMutation,
  useWorkspace,
} from "../Queries/workspaceQueries";
import AddNewTask from "../Components/Workspace/AddNewTask";
import Task from "../Components/Workspace/Task";

function Workspace() {
  const { theme } = useTheme();
  const user = useUser();
  const workspaceQuery = useWorkspace();
  const deleteTaskMutation = useDeleteTaskMutation();
  const completeTaskMutation = useTaksCompleteMutation();

  if (workspaceQuery.isError) return <h4>Failed to load tasks.</h4>;

  if (workspaceQuery.isLoading) return <CircularProgress />;

  const tasks = workspaceQuery.data;

  const removeTask = async (taskId) => {
    deleteTaskMutation.mutate(taskId);
  };

  const taskComplete = async (taskId) => {
    const completedBy = {
      isCompleted: true,
      completedBy: user.userName,
    };
    completeTaskMutation.mutate({ taskId, completedBy });
  };

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
