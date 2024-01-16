import { useDispatch } from "react-redux";
import { snackbarActions } from "../Features/Snackbar/snackbarSlice";


export default function useWatchNetworkConnection(query){

    const dispatch = useDispatch();

    setTimeout(
        () =>
          query.isPaused ?
          dispatch(
            snackbarActions.showSnackbar({
              message: "Waiting for internet connection",
              severity: "info",
              autoHide: false,
            })
          ) :
          dispatch(
            snackbarActions.hideSnackbar()
          ),
        1000
      );
}