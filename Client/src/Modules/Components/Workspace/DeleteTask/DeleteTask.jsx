import { Button } from "@mui/material";
import { buttonStyle } from "../../../Styles/Worlspace/common";
import { useTheme } from "../../Theme/Theme";

import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../../../Features/User/userSelectors";

export default function DeleteTask({ deleteTask,task }) {
  const { theme } = useTheme();
  const user = useUser();
  return (
    <Button
      disabled={task.createdBy.id !== user._id}
      sx={{
        ...buttonStyle,
        backgroundImage: `linear-gradient(${theme},#3268a8)`,
      }}
      onClick={deleteTask}
    >
      <DeleteIcon />
    </Button>
  );
}
