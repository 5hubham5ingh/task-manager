import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import serverApi from "../ServerApi/api";
import { WORKSPACE } from "../ServerApi/ApiRoutes/taskManager";
import { useUser } from "../Authentication/User/userSlice";
import {
  useAddNewTaskMutation,
  useDeleteTaskMutation,
  useTaksCompleteMutation,
  useWorkspace,
} from "../Queries/workspaceQueries";

const initialData = [
  {
    id: "1",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eos architecto iure sed totam optio rerum voluptates quo quos deleniti atque consequuntur est, repudiandae illo modi esse illum, perspiciatis id.",
    isCompleted: true,
    completedBy: "cd",
    createdBy: "fd",
  },
  { id: "2", body: "a", isCompleted: true, completedBy: "cd", createdBy: "fd" },
  {
    id: "3",
    body: "a",
    isCompleted: false,
    completedBy: "cd",
    createdBy: "fd",
  },
  { id: "4", body: "a", isCompleted: true, completedBy: "cd", createdBy: "fd" },
];

function Workspace() {
  const [tasks, setTasks] = useState();
  const { theme } = useTheme();
  const [newTask, setNewTask] = useState();
  const { workspaceId } = useParams();
  const user = useUser();
  useWorkspace(workspaceId, setTasks);
  const addNewTaskMutation = useAddNewTaskMutation();
  const deleteTaskMutation = useDeleteTaskMutation();
  const completeTaskMutation = useTaksCompleteMutation();
  //Load tasks
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await serverApi.get(`${WORKSPACE}/${workspaceId}`);
  //       setTasks(response.data);
  //       console.log(response);
  //     } catch (response) {
  //       console.log("error while fetching task lists", response);
  //     }
  //   })();
  //   console.log(workspaceId);
  // }, []);

  const addTask = async () => {
    const task = {
      body: newTask,
      isCompleted: false,
      completedBy: "",
      createdBy: { id: user._id, name: user.userName },
    };

    addNewTaskMutation.mutate(task);

    //send put request
    // try {
    //   const response = await serverApi.post(
    //     `${WORKSPACE}/${workspaceId}`,
    //     task
    //   );

    //   //if response is success then add the task to the task state array using id send by the server as response.
    //   setTasks((tasks) => [
    //     ...tasks,{
    //       _id: response.data._id,
    //       ...task
    //     }
    //   ]);
    //   setNewTask("");
    // } catch (response) {
    //   console.log("error while adding new task", response.data);
    // }
  };

  const removeTask = async (taskId) => {
    deleteTaskMutation.mutate(taskId);

    // try {
    //   const response = await serverApi.delete(
    //     `${WORKSPACE}/${workspaceId}/${taskId}`
    //   );
    //   setTasks((tasks) => tasks.filter((task) => task._id !== taskId));
    // } catch (response) {
    //   console.log("error while deleting task", response);
    // }
  };

  const taskComplete = async (taskId) => {
    debugger;

    completeTaskMutation.mutate(taskId, {
      isCompleted: true,
      completedBy: user.userName,
    });

    // try {
    //   const response = await serverApi.patch(
    //     `${WORKSPACE}/${workspaceId}/${taskId}`,
    //     {
    //       isCompleted: true,
    //       completedBy: user.userName,
    //     }
    //   );

    //   const completedTask = response.data.task;debugger
    //   setTasks(tasks => tasks.map(task => task._id === completedTask._id ? completedTask : task));
    // } catch (response) {
    //   console.log("Error while marking task complete", response);
    // }
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
        {tasks
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
          : "Loading tasks..."}

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
