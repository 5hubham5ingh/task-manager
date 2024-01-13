export const snackbarActionsAndReducers = {
    showSnackbar:(state,action)=>{
        return {
            message:action.payload.message,
            severity: action.payload.severity,
            visibility: true,
            autoHideDuration: action.payload.autoHide ? 2500 : null
        }
    },
    hideSnackbar: state =>{
        return {...state, visibility:false}
    }

}