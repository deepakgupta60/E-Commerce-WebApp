import { createSlice } from "@reduxjs/toolkit"

const initialState={isLoggedIn:false,pname:"Guest",uname:null,utype:null}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state,action)
        {
            state.isLoggedIn=true;
            state.pname=action.payload.name
            state.uname=action.payload.username
            state.utype=action.payload.usertype
        },
        logout(state,action)
        {
            state.isLoggedIn=false;
            state.pname="Guest";
            state.uname=null
            state.utype=null
        }
    }
})
export const {login,logout} = authSlice.actions;
export default authSlice.reducer;