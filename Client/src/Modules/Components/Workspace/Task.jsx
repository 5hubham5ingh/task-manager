import { Button, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteTaskMutation, useTaksCompleteMutation } from "../../Queries/workspaceQueries";
import { tasksStyle, buttonStyle } from "../../Styles/TaskManager";
import { useTheme } from "../Theme/Theme";
import { useUser } from "../../Authentication/User/userSlice";
export default function Task({ task }) {

  const deleteTaskMutation = useDeleteTaskMutation();
  const completeTaskMutation = useTaksCompleteMutation();
  const { theme } = useTheme();
  const user = useUser();
  const removeTask = async (taskId) => {
    deleteTaskMutation.mutate(taskId);
  };

  const taskComplete = async (taskId) => {
    const completedBy = {
      isCompleted: true,
      completedBy: user.userName,
    }
    completeTaskMutation.mutate({taskId, completedBy});
  };
  return (
    <>
      {/* Task Body */}
      <Typography
        variant="string"
        sx={{
          ...tasksStyle,
          backgroundImage: `linear-gradient(${theme},#3268a8)`,
        }}
        key={task.id}
      >
        {task.body}
        <Stack
          sx={{ marginTop: "1%" }}
          direction="row"
          justifyContent="space-between"
        >
          <Typography sx={{ color: "#abdaed" }} variant="body2">
            Assigned by: {task.createdBy.name}
          </Typography>
          <Typography sx={{ color: "#abdaed" }} variant="body2">
            {task.isCompleted ? "Completed" : "Pending"}
          </Typography>
        </Stack>
      </Typography>

      {/* Task Buttons */}
      {task.isCompleted ? (
        <Button
          disabled={task.createdBy.id !== user._id}
          sx={{
            ...buttonStyle,
            backgroundImage: `linear-gradient(${theme},#3268a8)`,
          }}
          onClick={(e) => removeTask(task._id)}
        >
          <DeleteIcon />
        </Button>
      ) : (
        <Button
          sx={{
            ...buttonStyle,
            backgroundImage: `linear-gradient(${theme},#3268a8)`,
          }}
          onClick={() => taskComplete(task._id)}
        >
          <CheckIcon />
        </Button>
      )}
    </>
  );
}
