import { useState } from "react";
import { useAddNewTaskMutation } from "../../../Queries/workspaceQueries";
import {
  footerStyle,
  addNewTaskInputField,
  buttonStyle,
} from "../../../Styles/Workspace";
import { useUser } from "../../../Authentication/User/userSlice";
import { Button, Stack, TextField } from "@mui/material";
import { useTheme } from "../../Theme/Theme";
import useAddNewTaskMutationHandler from "./AddNewTaskHandler";

export default function AddNewTask() {
  const [newTask, setNewTask] = useState("");
  const addNewTaskMutationHandler = useAddNewTaskMutationHandler();
  const user = useUser();

  const { theme } = useTheme();
  const addTask = async () => {
    const task = {
      body: newTask,
      isCompleted: false,
      completedBy: "",
      createdBy: { id: user._id, name: user.userName },
    };

    addNewTaskMutationHandler(task, {
      onSuccess: () => {
        setNewTask("");
      },
    });
  };

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
