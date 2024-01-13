import { useDispatch } from "react-redux";
import { hideSnackbar, showSnackbar } from "../Components/Snackbar/snackbarSlice";


export default function useWatchNetworkConnection(query){

    const dispatch = useDispatch();

    setTimeout(
        () =>
          query.isPaused ?
          dispatch(
            showSnackbar({
              message: "Waiting for internet connection",
              severity: "info",
              autoHide: false,
            })
          ) :
          dispatch(
            hideSnackbar()
          ),
        1000
      );
}