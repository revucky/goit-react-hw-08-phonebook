import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./AuthOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loadingUser: true,
  error: null,
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(authOperations.register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        // state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        // state.refreshToken = payload.refreshToken;
        // state.localId = payload.localId;
      })
      .addCase(authOperations.register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      /// LOGIN
      .addCase(authOperations.logIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // LOG OUT
      .addCase(authOperations.logOut.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logOut.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.token = null;
      })
      // REFRESH
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.error = null;
        state.loadingUser = true;
      })
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          // state.user = payload ?? { name: null, email: null };
          state.isLoggedIn = true;
          state.loadingUser = false;
        }
      )
      .addCase(
        authOperations.fetchCurrentUser.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.loadingUser = false;
          state.token = null;
        }
      );
  },
  // {
  //   [authOperations.register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [authOperations.logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  // [authOperations.logOut.fulfilled](state, action) {
  //   state.user = { name: null, email: null };
  //   state.token = null;
  //   state.isLoggedIn = false;
  // },
  //   [authOperations.fetchCurrentUser.fulfilled](state, action) {
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //   },
  // },
});
export default authSlice.reducer;
