import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { buttonStyle } from "../../../Styles/Common/Button";
import { headingStyle } from "../../../Styles/Common/Heading";
import { modalStyle } from "../../../Styles/Common/Modal";
import { textFieldStyle } from "../../../Styles/Common/TextField";
import { BluredBackground } from "../../Common/BluredBackground";
import { useTheme } from "../../Theme/Theme";
import SearchUsers from "../SelectParticipants";

export default function AddNewWorkspaceModal({
  closeModal,
  isAddingNewWorkspace,
  handleValidation,
  validationError,
}) {
  const { theme } = useTheme();
  const workspaceNameRef = useRef('');
  const workspaceDescriptionRef = useRef('');
  const workspaceParticipantsRef = useRef('');

  const submit = async () => {
    const workspace = {
      name: workspaceNameRef.current.value || '',
      description: workspaceDescriptionRef.current.value || '',
      participants: workspaceParticipantsRef.current || [],
    };
    handleValidation(workspace);
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
          error={Boolean(validationError)}
          helperText={validationError}
          sx={textFieldStyle}
        />
        <TextField
          label="Description"
          inputRef={workspaceDescriptionRef}
          sx={textFieldStyle}
        />
        <SearchUsers participants={workspaceParticipantsRef} />
        <Button
          variant="contained"
          sx={buttonStyle}
          size="large"
          onClick={submit}
        >
          {!isAddingNewWorkspace ? "Add" : "adding..."}
        </Button>
      </Stack>
    </Box>
  );
}
