// sukurti 2 slices

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initAuthState = {
  user: null,
  isLoggedIn: false,
};

// authSlice()
const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    register(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state = initAuthState;
    },
  },
});
// user, isLoggedIn
// login, logout, register()

const initUiState = {
  msg: '',
  type: '',
  show: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initUiState,
  reducers: {
    showFeedback(state, action) {
      state.msg = action.payload.msg;
      state.type = action.payload.type;
      state.show = true;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  },
});
// uiSlice()
// showFeedback()
export const authActions = authSlice.actions;
export const uiActions = uiSlice.actions;

export default store;
