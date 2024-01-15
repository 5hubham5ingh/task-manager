export const userActionsAndReducers = {
    //Action : reducer
    login:(state,action)=>{return action.payload},
    logOut:(state,action)=>{return null},
    signUp:(state,action)=>{return action.payload}
}