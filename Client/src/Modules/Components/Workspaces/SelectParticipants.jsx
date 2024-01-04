import { useEffect, useState, Fragment } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { textFieldStyle } from '../../Styles/TextField';
import { Paper } from '@mui/material';
import { PARTICIPANTS } from '../../ServerApi/ApiRoutes/workspaces';
import useServer from '../../Hooks/useServer'



export default function SelectParticipants({ participants }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const request = useServer();

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      try{
      const response = await request({url:PARTICIPANTS, method: 'get'});
        active && setOptions(response.data);

    }catch(error){
      console.log("error while fetching participants list",error);
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
      isOptionEqualToValue={(option, value) => option.userName === value.userName}
      getOptionLabel={(option) => option.userName}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          sx={textFieldStyle}
          {...params}
          label="Participants"
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


const participantsList = [{ userName: "shubham", _id: 1 }, { userName: 'singh', _id: 2 }];
