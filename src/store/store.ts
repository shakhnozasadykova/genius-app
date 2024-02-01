import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import { authApi } from "./api/authApi";
import { getLyricsApi } from "./api/getLyricsApi";

export const store = configureStore({
  reducer: {
    userSlice,
    authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [getLyricsApi.reducerPath]: getLyricsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
