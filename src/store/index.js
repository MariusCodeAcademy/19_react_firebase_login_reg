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
      console.log('login redux happened');
      state.userEmail = action.payload.email;
      state.userUid = action.payload.uid;
      state.isLoggedIn = true;
      localStorage.setItem(
        localUserKey,
        JSON.stringify({ email: state.userEmail, uid: state.userUid }),
      );
    },
    logout(state) {
      state.userEmail = null;
      state.userUid = null;
      state.isLoggedIn = false;
      localStorage.removeItem(localUserKey);
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
// initUiState = {
//   msg: 'cia zinute',
//   type: 'success',
//   show: true,
//   isLoading: false,
// };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initUiState,
  reducers: {
    showSuccess(state, action) {
      state.show = true;
      state.type = 'success';
      state.msg = action.payload;
    },
    closeAlert(state) {
      state.msg = '';
      state.type = '';
      state.show = false;
    },
    showLoading(state) {
      state.show = true;
      state.type = 'info';
      state.msg = 'Loading...';
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
