import { createContext, useContext, useReducer } from "react"
import{ ACTION }from "./ACTIONS"
import { Alert, Snackbar } from "@mui/material";

const snackbar = createContext(null);

const initialState={
    message:"",
    severity:"success",
    visibility: false
}

export function SnackBarContextProvider({children}){
const [state,dispatch] = useReducer(reducer,initialState)
    
    return(
    <snackbar.Provider value={{state,dispatch}}>
        {children}
    </snackbar.Provider>
    )
}
function reducer(state,action){
    switch(action.type){
        case ACTION.LOGIN_SUCCESSFUL:
            return {
                message:"Log in successful!",
                severity: 'successful',
                visibility: true
            }
        case ACTION.LOGIN_FAILED:
            return {
                message:"Failed failed!",
                severity: 'error',
                visibility: true
            }
        case ACTION.SIGNUP_SUCCESSFUL:
            return {
                message:"Sign up successful!",
                severity: 'success',
                visibility: true
            }
        case ACTION.SIGNUP_FAILED:
            return {
                message:"Sign up failed!",
                severity: 'error',
                visibility: true
            }
            
            default: return state;

    }
}

//SnackBar component
export default function SnackBar() {
    const snackbar = useSnackbar();
    const close = () => snackbar.dispatch("close");
    return (
      <>
        <Snackbar
          message={snackbar.state.message}
          autoHideDuration={2500}
          open={snackbar.state.visibility}
          onClose={close}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={close}
            severity={snackbar.state.severity}
            
          >
            {snackbar.state.message}
          </Alert>
        </Snackbar>
      </>
    );
  }

export function useSnackbar(){
return useContext(snackbar);

}

