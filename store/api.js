import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const response=createAsyncThunk("userData",async()=>{

    const fetchData=  await axios.get("http://localhost:3000/userDetails")
    return fetchData.data
 
})


const apiSlice=createSlice({
    name:"apiSlice",
    initialState:{
        userData:[],
        loading:true,
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(response.fulfilled,(state,action)=>{
            return {...state,userData:action.payload,loading:false}
        })
        .addCase(response.pending,(state,action)=>{
            return {...state,loading:true}
        })
        .addCase(response.rejected,(state,action)=>{
            return {...state,error:"something is wrong",loading:false}
        })


    }
})

export default apiSlice.reducer;