import { Button } from "@mui/material";
import { buttonStyle } from "../../../Styles/Workspace";
import useDeleteTaskMutationHandler from "./deleteTaskMutationHandler";
import { useTheme } from "../../Theme/Theme";

import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../../../Authentication/User/userSlice";

export default function DeleteTask({task}) {
  const removeTask = useDeleteTaskMutationHandler(task._id);
  const { theme } = useTheme();
  const user = useUser();
  return (
    <Button
      disabled={task.createdBy.id !== user._id }
      sx={{
        ...buttonStyle,
        backgroundImage: `linear-gradient(${theme},#3268a8)`,
      }}
      onClick={removeTask}
    >
      <DeleteIcon />
    </Button>
  );
}
