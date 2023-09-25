import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useTheme } from "./Component/Theme/Theme";

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: "1", task: "a" },
    { id: "2", task: "a" },
    { id: "3", task: "a" },
    { id: "4", task: "a" },
  ]);
  const { theme } = useTheme();
  const inputRef = useRef();
  const buttons = [" ✔️ ", " ❌ ", " ✏️ "];
  const addTask = () => {
    //send put request
    //if response is success then add the task to the task state array using id send by the server as response.
    setTasks((tasks) => [
      ...tasks,
      { id: tasks.length, task: inputRef.current },
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

  const editTask=(id)=>{
    
  }

  const handleClick = (e,id)=>{
    switch(e.target.name){
      case " ✔️ ": taskComplete(id)
        break;
      case " ❌ ": removeTask(id)
        break;
      case " ✏️ ": editTask(id)
        break;
    }
  }
  return (
    <Stack
      direction="column"
      sx={{
        width: "100vw",
        height: "80vh",
        padding: "2vw",
        overflowY: "scroll",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginLeft: "1vw",
          color: "#3268a8",
          position: "fixed",
          top: "2vh",
        }}
      >
        Tasks
      </Typography>

      {tasks.map((task, index) => (
        <Stack
          key={index}
          direction="row"
          spacing="1vw"
          margin="1vw"
          sx={{ alignItems: "center" }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              width: "90%",
              padding: "1vw",
              paddingLeft: "2vw",
              borderRadius: "20px",
              backgroundImage: `linear-gradient(${theme},#3268a8)`,
              overflowWrap: "break-word",
            }}
            key={task.id}
          >
            {task.task}
          </Typography>
          {buttons.map((button, index) => {
            return (
              <Button
              name={button}
              taskId={task.id}
                sx={{
                  ...buttonStyle,
                  backgroundImage: `linear-gradient(${theme},#3268a8)`,
                }}
                onClick={(e)=>handleClick(e,task.id)}
              >
                {button}
              </Button>
            );
          })}
        </Stack>
      ))}

      <Stack
        direction="row"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "98vw",
          marginBottom: "1vw",
          alignItems: "center",
        }}
      >
        <TextField
          onChange={(e) => {
            inputRef.current = e.target.value;
          }}
          placeholder="Add new task."
          sx={{
            marginLeft: "1vw",
            marginRight: "1vw",
            paddingLeft: "1vw",
            backgroundImage: `linear-gradient(${theme},#3268a8)`,
            borderRadius: "20px",
          }}
          inputProps={{
            style: {
              color: "white",
            },
          }}
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
  );
}

export default TaskManager;

const buttonStyle = {
  marginRight: "1vw",
  borderRadius: "20px",

  height: "50px",
};
