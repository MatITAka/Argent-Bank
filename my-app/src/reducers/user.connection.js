import {createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "userSlice/fetchUser", 
  async(userData) => {
    const {data} = await axios.post ("http://localhost:3001/api/v1/user/login", userData);
    console.log (data.body)
    return data.body;
});

export const getUser = createAsyncThunk (
  'userSlice/getUser',
  async () => {
    const token = localStorage.getItem('token') || null 
    const {data} = await axios.post ("http://localhost:3001/api/v1/user/profile", {token},
    { headers : {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${token}`,
      },
    }
    );
    return data.body;
    
  }
);

const initialState = {
  token : localStorage.getItem('token') || null,
  isLoggedIn : localStorage.getItem('token') ? true : false,
  currentUser : {},
}
  

const usersSlice = createSlice ({

  name :'userSlice',
  initialState,
  reducers : {
    logout(state){
      state.token = null;
      localStorage.clear();
      state.isLoggedIn = false;
      state.currentUser ={};
    },
  },

    extraReducers : (builder) => {
      
      builder.addCase (fetchUser.fulfilled, (state,action)=> {
        state.token= action.payload.token;
        localStorage.setItem('token',action.payload.token);//stockage du token dans le localStorage
        state.isLoggedIn =true;
        getUser();
        
      })

      builder.addCase(getUser.fulfilled, (state, action) => {
       
        state.currentUser = action.payload;
        
      });
    

      builder.addCase (fetchUser.rejected, (state, action) => {
        localStorage.clear();
        // console.log(action.error.message);
        state.isLoggedIn=false;
        
      })
    },
})

export const {logout} = usersSlice.actions;

export default usersSlice.reducer;