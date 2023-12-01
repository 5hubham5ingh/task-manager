import { useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "./Theme/Theme";
import SelectParticipants from "./SelectParticipants";
import { textFieldStyle } from "../Styles/TextField";
import { buttonStyle } from "../Styles/Button";
import { headingStyle } from "../Styles/Heading";
import { BluredBackground } from "./BluredBackground";
import { modalStyle } from "../Styles/Modal";
import { useUser } from "../Authentication/User/userSlice";
import { WORKSPACES } from "../ServerApi/ApiRoutes/workspace";
import serverApi from "../ServerApi/api";
import { useParams } from "react-router-dom";
import { useAddWorkspace } from "../Queries/workspacesQueries";

export const AddNewWorkSpaceModal = ({ addNewWorkSpace, closeModal }) => {
  const { theme } = useTheme();
  const workSpaceNameRef = useRef(null);
  const workSpaceDescriptionRef = useRef(null);
  const workSpaceParticipantsRef = useRef(null);
  const [error, setError] = useState("");
  const [addingNewWorkspace, setAddingNewWorkspace] = useState(false);
  const { _id, userName } = useUser();
  const { userId } = useParams();

  const addNewWorkSpaceMutation = useAddWorkspace();

  const handleSubmit = async () => {
    if (workSpaceNameRef.current.value === "") {
      setError("Name is required!");
      return;
    }
    const workSpace = {
      name: workSpaceNameRef.current.value,
      owner: { _id, userName },
      description: workSpaceDescriptionRef.current.value
        ? workSpaceDescriptionRef.current.value
        : null,
      participants: workSpaceParticipantsRef.current,
    };

    addNewWorkSpaceMutation.mutate(workSpace);
    setAddingNewWorkspace(addNewWorkSpaceMutation.isPending);
    addNewWorkSpaceMutation.isSuccess && closeModal();
  };

  // const handleSubmit = async () => {
  //   if (workSpaceNameRef.current.value === "") {
  //     setError("Name is required!");
  //     return;
  //   }

  //   setAddingNewWorkspace(true);

  //   const workSpace = {
  //     name: workSpaceNameRef.current.value,
  //     owner: {_id, userName},
  //     description: workSpaceDescriptionRef.current.value
  //       ? workSpaceDescriptionRef.current.value
  //       : null,
  //     participants:workSpaceParticipantsRef.current
  //   };

  //   //Sent request to add new workSpace
  //   const response = await serverApi.post(`${WORKSPACES}/${userId}`, workSpace);

  //   addNewWorkSpace(  {
  //     _id: response.data._id,
  //     ...workSpace

  //   });

  //   closeModal();
  // };
  return (
    <Box direction="column" sx={modalStyle}>
      <BluredBackground onClick={closeModal} />
      <Stack
        sx={{
          backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))`,
          borderRadius: "20px",
        }}
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
        <SelectParticipants participants={workSpaceParticipantsRef} />
        <Button
          variant="contained"
          sx={buttonStyle}
          size="large"
          onClick={handleSubmit}
        >
          {!addingNewWorkspace ? "Add" : "adding..."}
        </Button>
      </Stack>
    </Box>
  );
};
