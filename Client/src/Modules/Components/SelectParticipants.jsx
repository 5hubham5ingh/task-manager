import { useEffect, useState, Fragment } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { textFieldStyle } from '../Styles/TextField';
import { Paper } from '@mui/material';

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function SelectParticipants({ participants }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...participantsList]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  const handleChange = (e, value) => {
    participants.current = value;
  }
  return (
    <Autocomplete
      onChange={handleChange}
      fullwidth
      PaperComponent={({ children }) => (
        <Paper style={{ background: "#abdaed" }}>{children}</Paper>
      )}
      sx={{ background: 'transparent',borderRadius:'20px' }}
      open={open}
      multiple={true}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          sx={textFieldStyle}
          {...params}
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
}


const participantsList = [{ name: "shubham", userId: 1 }, { name: 'singh', userId: 2 }];
