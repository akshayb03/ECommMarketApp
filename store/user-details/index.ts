import {createSlice} from '@reduxjs/toolkit';

interface UserDetails {
  userName: string;
  authenticationToken?: string;
}

const initialState: UserDetails = {
  userName: 'Anonymous',
};

const slice = createSlice({
  name: 'userDetails',
  initialState: initialState,
  reducers: {
    saveUserName: (state, {payload: {name}}) => {
      state.userName = name;
      return state;
    },
    saveAuthenticationToken: (state, {payload}) => {
      state.authenticationToken = payload;
    },
  },
});

export const {saveUserName, saveAuthenticationToken} = slice.actions;

export default slice.reducer;
