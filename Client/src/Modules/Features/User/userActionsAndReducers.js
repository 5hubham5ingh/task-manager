export const userActionsAndReducers = {
  //Action : reducer
  login: (state, action) => {
    debugger;
    if (action.payload?.token)
      localStorage.setItem("refreshToken", action.payload?.token);
    return { user: action.payload.user };
  },
  logOut: (state, action) => {
    localStorage.removeItem("refreshToken");
    return null;
  },
  signUp: (state, action) => {
    return action.payload;
  },
};
