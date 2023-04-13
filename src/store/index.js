// sukurti 2 slices

import { configureStore, createSlice } from '@reduxjs/toolkit';

const localUserKey = 'FIRE_USER';

const storageUserDataJson = localStorage.getItem(localUserKey);

const initAuthState = {
  userEmail: storageUserDataJson ? JSON.parse(storageUserDataJson).email : null,
  userUid: storageUserDataJson ? JSON.parse(storageUserDataJson).uid : null,
  isLoggedIn: storageUserDataJson ? true : false,
};
// authSlice()
const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      console.log('login redux happened');
      state.userEmail = action.payload.email;
      state.userUid = action.payload.uid;
      state.isLoggedIn = true;
      localStorage.setItem(
        localUserKey,
        JSON.stringify({ email: state.userEmail, uid: state.userUid }),
      );
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