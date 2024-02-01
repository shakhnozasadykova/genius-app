import { createSlice } from "@reduxjs/toolkit";

interface IRegisteredUser {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface IAuthSliceState {
  user: IRegisteredUser | null;
}

const initialState: IAuthSliceState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
