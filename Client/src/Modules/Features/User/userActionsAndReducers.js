export const userActionsAndReducers = {
  //Action : reducer
  login: (state, action) => {
    localStorage.setItem("refreshToken", action.payload?.token);
    return action.payload.user;
  },
  logOut: (state, action) => {
    localStorage.removeItem("refreshToken");
    return null;
  },
  signUp: (state, action) => {
    return action.payload;
  },
};
