import { useRef, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "./Theme/Theme";


export const AddNewWorkSpaceModal = ({ addNewWorkSpace, closeModal }) => {
    const { theme } = useTheme();
    const workSpaceNameRef = useRef(null);
    const workSpaceDescriptionRef = useRef(null);
    const [error, setError] = useState("");
    const handleSubmit = () => {
      console.log(workSpaceNameRef.current.target);
      if (workSpaceNameRef.current.value === "") {
        setError("Name is required!");
        return;
      }
      //Sent request to add new workSpace
      const workSpace = {
        name: workSpaceNameRef.current.value,
        description: workSpaceDescriptionRef.current.value
          ? workSpaceDescriptionRef.current.value
          : null,
      };
      console.log("workSpace: ", workSpace);
    };
    return (
      <Box
        direction="column"
        sx={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <BluredBackground onClick={closeModal} />
        <Stack
          sx={{ backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))` }}
          component="form"
          className="form"
          p="2vw"
          spacing="2vw"
        >
          <Typography sx={headingStyle} variant="h6">
            Add new Workplace
          </Typography>
          <TextField
            label="Name"
            inputRef={workSpaceNameRef}
            error={Boolean(error)}
            helperText={error}
            fullwidth
            sx={textFieldStyle}
          />
          <TextField
            label="Description"
            ref={workSpaceDescriptionRef}
            fullwidth
            sx={textFieldStyle}
          />
          <Button
            variant="contained"
            sx={buttonStyle}
            size="large"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Stack>
      </Box>
    );
  };

  const textFieldStyle = {
    "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "darkBlue" },
    "& label.Mui-focused": { color: "darkBlue" },
  };
  
  const buttonStyle = {
    "&:hover": {
      backgroundColor: "darkBlue",
    },
    backgroundColor: "#3268a8",
    marginLeft: "auto",
  };
  
  const headingStyle = {
    color: "#3268a8",
    padding: 0,
    margin: 0,
  };
  
  export const BluredBackground = ({ onClick }) => {
    return (
      <div
        style={{
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100vw",
          height: "100vh",
          backdropFilter: "blur(5px)",
          zIndex: -999,
        }}
        onClick={onClick}
      ></div>
    );
  };