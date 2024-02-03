import { Fragment } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { textFieldStyle } from "../../../Styles/Common/TextField";
import { Paper } from "@mui/material";

export default function SelectParticipants({
  handleChange,
  isSearching,
  searchUser,
  stopSearch,
  options,
  isLoading,
}) {
  return (
    <Autocomplete
      onChange={handleChange}
      fullwidth
      PaperComponent={({ children }) => (
        <Paper style={{ background: "#abdaed" }}>{children}</Paper>
      )}
      sx={{ background: "transparent", borderRadius: "20px" }}
      open={isSearching}
      multiple={true}
      onClose={() => {
        stopSearch(false);
      }}
      isOptionEqualToValue={(option, value) =>
        option.userName === value.userName
      }
      getOptionLabel={(option) => option.userName}
      options={options}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          sx={textFieldStyle}
          {...params}
          label="Participants"
          onChange={(e) => {
            console.log("change");
            searchUser(e.target.value);
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
}
