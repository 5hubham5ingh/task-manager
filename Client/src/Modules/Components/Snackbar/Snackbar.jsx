import { Alert, Snackbar as MUI_Snackbar } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import { hideSnackbar } from "./snackbarSlice";

//SnackBar component
export default function Snackbar() {
    const snackbar = useSelector(state => state.snackbar);
    const dispatch = useDispatch();

    const close = () => dispatch(hideSnackbar());
    return (
      <>
        <MUI_Snackbar
          message={snackbar.message}
          autoHideDuration={2500}
          open={snackbar.visibility}
          onClose={close}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={close}
            severity={snackbar.severity}
            
          >
            {snackbar.message}
          </Alert>
        </MUI_Snackbar>
      </>
    );
  }