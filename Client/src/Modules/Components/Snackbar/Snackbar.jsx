import { Alert, Snackbar as MUI_Snackbar } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import { snackbarActions } from "../../Features/Snackbar/snackbarSlice";

//SnackBar component
export default function Snackbar() {
    const snackbar = useSelector(state => state.snackbar);
    const dispatch = useDispatch();

    const close = () => dispatch(snackbarActions.hideSnackbar());
    return (
      <>
        <MUI_Snackbar
          message={snackbar.message}
          autoHideDuration={snackbar.autoHideDuration}
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