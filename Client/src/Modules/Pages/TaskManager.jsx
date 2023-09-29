import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Components/Theme/Theme";
import { BackGround } from "../Components/Background";
import { bodyStyle, footerStyle, headingStyle, tasksStyle, addNewTaskInputField, buttonStyle } from "../Styles/TaskManager";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: "1", body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eos architecto iure sed totam optio rerum voluptates quo quos deleniti atque consequuntur est, repudiandae illo modi esse illum, perspiciatis id.', isCompleted: true, completedBy: "cd", createdBy: 'fd' },
    { id: "2", body: "a", isCompleted: true, completedBy: "cd", createdBy: 'fd' },
    { id: "3", body: "a", isCompleted: false, completedBy: "cd", createdBy: 'fd' },
    { id: "4", body: "a", isCompleted: true, completedBy: "cd", createdBy: 'fd' }
  ]);
  const { theme } = useTheme();
  const inputRef = useRef();


  //Load tasks
  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const id = url.get("id");
    console.log(id)
  }, [])
  const addTask = () => {
    //send put request
    //if response is success then add the task to the task state array using id send by the server as response.
    setTasks((tasks) => [
      ...tasks,
      { id: tasks.length, body: inputRef.current, isCompleted: false, createdBy: 'sd', },
    ]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const taskComplete = (id) => {
    //send request to delete
    //if success then update the tasks state array
    removeTask(id);
  };

 
  return (
    <BackGround itemAlignment='center'>

      {/* Body */}
      <Stack
        direction="column"
        sx={bodyStyle}
      >
        {/* heading */}
        <Typography
          variant="h4"
          sx={headingStyle}
        >
          Tasks
        </Typography>

        {/* Content */}
        {tasks.map((task, index) => (
          <Stack
            key={index}
            direction="row"
            spacing="1vw"
            margin="1vw"
            sx={{ alignItems: "center" }}
          >
            {/* Task */}
            <Typography
              variant="string"
              sx={{ ...tasksStyle, backgroundImage: `linear-gradient(${theme},#3268a8)`, }}
              key={task.id}
            >
              {task.body}

              <Stack sx={{ marginTop: '1%' }} direction='row' justifyContent='space-between'>
                <Typography sx={{ color: "#abdaed" }} variant="body2">Assigned by: {task.createdBy} </Typography>
                <Typography sx={{ color: "#abdaed" }} variant="body2">{task.isCompleted ? 'Complete' : 'Pending'}</Typography>
              </Stack>
            </Typography>

            {/* Buttons */}

            {task.isCompleted ?
              <Button
                taskId={task.id}
                sx={{
                  ...buttonStyle,
                  backgroundImage: `linear-gradient(${theme},#3268a8)`,
                }}
                onClick={(e) => removeTask(task.id)}
              >
                <DeleteIcon />
              </Button>
              : <Button
                taskId={task.id}
                sx={{
                  ...buttonStyle,
                  backgroundImage: `linear-gradient(${theme},#3268a8)`,
                }}
                onClick={() => taskComplete(task.id)}
              ><CheckIcon />
              </Button>}


          </Stack>
        ))}

        {/* Footer */}
        <Stack
          direction="row"
          sx={footerStyle}
        >
          <TextField
            onChange={(e) => {
              inputRef.current = e.target.value;
            }}
            placeholder="Add new task."
            sx={{ ...addNewTaskInputField, backgroundImage: `linear-gradient(${theme},#3268a8)` }}

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

export default TaskManager;




