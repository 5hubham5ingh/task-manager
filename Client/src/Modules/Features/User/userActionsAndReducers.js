export const userActionsAndReducers = {
    login:(state,action)=>{return action.payload},
    logOut:(state,action)=>{return null},
    signUp:(state,action)=>{return action.payload}
}