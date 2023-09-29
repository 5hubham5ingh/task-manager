import { useRef, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "./Theme/Theme";
import SelectParticipants  from "./SelectParticipants";
import {textFieldStyle} from "../Styles/TextField";
import { buttonStyle } from "../Styles/Button";
import { headingStyle } from "../Styles/Heading";
import {BluredBackground} from "./BluredBackground"
import {modalStyle} from "../Styles/Modal"
export const AddNewWorkSpaceModal = ({ addNewWorkSpace, closeModal }) => {
  const { theme } = useTheme();
  const workSpaceNameRef = useRef(null);
  const workSpaceDescriptionRef = useRef(null);
  const workSpaceParticipantsRef = useRef(null);
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
      participants:workSpaceParticipantsRef.current
    };
    addNewWorkSpace(  {
      id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
   
    });

    closeModal();
  };
  return (
    <Box
      direction="column"
      sx={modalStyle}
    >
      <BluredBackground onClick={closeModal} />
      <Stack
        sx={{ backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))` ,borderRadius:'20px'}}
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
          inputRef={workSpaceDescriptionRef}
          fullwidth
          sx={textFieldStyle}
        />
        <SelectParticipants participants={workSpaceParticipantsRef}/>
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



