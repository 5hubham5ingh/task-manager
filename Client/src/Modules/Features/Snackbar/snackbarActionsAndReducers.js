export const snackbarActionsAndReducers = {
  showSnackbar: (state, action) => {
    return {
      message: action.payload.message,
      severity: action.payload.severity,
      visibility: true,
      autoHideDuration:
        action.payload.autoHideDuration !== undefined
          ? action.payload.autoHideDuration
          : 3000,
    };
  },
  hideSnackbar: (state) => {
    return { ...state, visibility: false };
  },
};
