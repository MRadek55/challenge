import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveTokenToAsyncStorage } from '../utils/asyncStorage';

export interface StateType {
  token: string | null;
}

const initialState: StateType = {
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      saveTokenToAsyncStorage(action.payload);
      state.token = action.payload;
    },
    clearToken: state => {
      state.token = null;
    },
  },
});

export const { clearToken, saveToken } = authSlice.actions;

export default authSlice.reducer;
