import { Stack, Typography } from "@mui/material";
import { tasksStyle } from "../../Styles/Worlspace/task";
import { useTheme } from "../Theme/Theme";
import DeleteTaskButton from "./DeleteTask/index";
import CompleteTaskButton from "./CompleteTask/index";

export default function Task({ task }) {
  const { theme } = useTheme();
  return (
    <>
      {/* Task Body */}
      <Typography
        variant="string"
        sx={{
          ...tasksStyle,
          backgroundImage: `linear-gradient(${theme},#3268a8)`,
        }}
        key={task._id}
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
        <DeleteTaskButton task={task} />
      ) : (
        <CompleteTaskButton taskId={task._id} />
      )}
    </>
  );
}
