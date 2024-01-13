import { useState } from "react";
import { useAddNewTaskMutation } from "../../../Queries/workspaceQueries";
import {
  footerStyle,
  addNewTaskInputField,
  buttonStyle,
} from "../../../Styles/Workspace";
import { Button, Stack, TextField } from "@mui/material";
import { useTheme } from "../../Theme/Theme";

export default function AddNewTask({ addNewTask }) {
  const [newTask, setNewTask] = useState("");

  const { theme } = useTheme();
  const addTask = () => addNewTask(newTask, () => setNewTask(""));

  return (
    <Stack direction="row" sx={footerStyle}>
      <TextField
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        placeholder="Add new task."
        sx={{
          ...addNewTaskInputField,
          backgroundImage: `linear-gradient(${theme},#3268a8)`,
        }}
        value={newTask}
        fullWidth
      />
      <Button
        onClick={addTask}
        variant="contained"
        size="small"
        sx={{
          ...buttonStyle,
          backgroundImage: `linear-gradient(${theme},#3268a8)`,
        }}
      >
        {" "}
        +{" "}
      </Button>
    </Stack>
  );
}
