import {configureStore} from '@reduxjs/toolkit';
import usersReducer from "./user.connection";

export const store = configureStore ({
  reducer : { usersReducer},
  devTools : true,
})