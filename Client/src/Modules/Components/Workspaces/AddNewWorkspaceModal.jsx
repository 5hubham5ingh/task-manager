import { useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "../Theme/Theme";
import SelectParticipants from "./SelectParticipants";
import { textFieldStyle } from "../../Styles/TextField";
import { buttonStyle } from "../../Styles/Button";
import { headingStyle } from "../../Styles/Heading";
import { BluredBackground } from "../Common/BluredBackground";
import { modalStyle } from "../../Styles/Modal";
import { useUser } from "../../Features/User/userSlice";
import { useAddWorkspace } from "../../Queries/workspacesQueries";

export const AddNewWorkspaceModal = ({ closeModal }) => {
  const { theme } = useTheme();
  const workspaceNameRef = useRef(null);
  const workspaceDescriptionRef = useRef(null);
  const workspaceParticipantsRef = useRef(null);
  const [error, setError] = useState("");
  const { _id, userName } = useUser();
  const { isPending: isAddingNewWorkspace, mutate: addNewWorkspace } =
    useAddWorkspace(closeModal);

  const handleSubmit = async () => {
    if (workspaceNameRef.current.value === "") {
      setError("Name is required!");
      return;
    }
    const workspace = {
      name: workspaceNameRef.current.value,
      owner: { _id, userName },
      description: workspaceDescriptionRef.current.value
        ? workspaceDescriptionRef.current.value
        : null,
      participants: workspaceParticipantsRef.current,
    };

    addNewWorkspace(workspace);
  };

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
          inputRef={workspaceNameRef}
          error={Boolean(error)}
          helperText={error}
          sx={textFieldStyle}
        />
        <TextField
          label="Description"
          inputRef={workspaceDescriptionRef}
          sx={textFieldStyle}
        />
        <SelectParticipants participants={workspaceParticipantsRef} />
        <Button
          variant="contained"
          sx={buttonStyle}
          size="large"
          onClick={handleSubmit}
        >
          {!isAddingNewWorkspace ? "Add" : "adding..."}
        </Button>
      </Stack>
    </Box>
  );
};
