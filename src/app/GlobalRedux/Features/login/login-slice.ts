import {Login} from "../../../models/login";
import {createSlice} from "@reduxjs/toolkit";

export interface loginState
{
     newlogin:Login[];
     oflogin:Login[]
}
const initialState:loginState=
{
    newlogin:[],
    oflogin:[]
}
export const loginSlice = createSlice({
    name:'login',
    initialState:initialState,
    reducers:{
        setlog:(state,action)=>{
         state.newlogin = action.payload;
        },
        setoflog:(state,action)=>{
            state.oflogin=action.payload;
        },
        clearOflog:(state)=>{
            state.oflogin=[];
        },
    }
});
export const {setlog,setoflog,clearOflog}=loginSlice.actions;
export default loginSlice.reducer;