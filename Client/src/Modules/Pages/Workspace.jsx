import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTheme } from "../Components/Theme/Theme";
import { BackGround } from "../Components/Background";
import {
  bodyStyle,
  footerStyle,
  headingStyle,
  tasksStyle,
  addNewTaskInputField,
  buttonStyle,
} from "../Styles/TaskManager";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../Authentication/User/userSlice";
import {
  useAddNewTaskMutation,
  useDeleteTaskMutation,
  useTaksCompleteMutation,
  useWorkspace,
} from "../Queries/workspaceQueries";


function Workspace() {
  const { theme } = useTheme();
  const [newTask, setNewTask] = useState();
  const user = useUser();
  const workspaceQuery =  useWorkspace();
  const addNewTaskMutation = useAddNewTaskMutation();
  const deleteTaskMutation = useDeleteTaskMutation();
  const completeTaskMutation = useTaksCompleteMutation();

  if(workspaceQuery.isError) return <h4>Failed to load tasks.</h4>;

  if(workspaceQuery.isLoading) return <CircularProgress/>;

  const tasks = workspaceQuery.data;
  
  //addNewTaskMutation.isSuccess && setNewTask('');

  const addTask = async () => {
    const task = {
      body: newTask,
      isCompleted: false,
      completedBy: "",
      createdBy: { id: user._id, name: user.userName },
    };

    addNewTaskMutation.mutate(task);
  };

  const removeTask = async (taskId) => {
    deleteTaskMutation.mutate(taskId);
  };

  const taskComplete = async (taskId) => {
    completeTaskMutation.mutate(taskId, {
      isCompleted: true,
      completedBy: user.userName,
    });
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
        {tasks.length !== 0
          ? tasks.map((task) => (
              <Stack
                key={task._id}
                direction="row"
                spacing="1vw"
                margin="1vw"
                sx={{ alignItems: "center" }}
              >
                {/* Task */}
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

                {/* Buttons */}

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
              </Stack>
            ))
          : <Typography variant="h6">No tasks added.</Typography>}

        {/* Footer */}
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
      </Stack>
    </BackGround>
  );
}

export default Workspace;
