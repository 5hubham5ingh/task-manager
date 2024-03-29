import { useTheme } from "../../Theme/Theme";
import { buttonStyle } from "../../../Styles/Worlspace/common";
//import useTaskCompleteMutationHandler from "./completeTaskMutationHandler";
import { Button } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

export default function CompleteTask({ taskComplete }) {
  const { theme } = useTheme();
 // const taskComplete = useTaskCompleteMutationHandler(taskId);
  return (
    <Button
      sx={{
        ...buttonStyle,
        backgroundImage: `linear-gradient(${theme},#3268a8)`,
      }}
      onClick={taskComplete}
    >
      <CheckIcon />
    </Button>
  );
}
