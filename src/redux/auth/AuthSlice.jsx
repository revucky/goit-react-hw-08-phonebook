import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./AuthOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
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

      .addCase(authOperations.logOut.pending, (state) => {
        state.error = null;
        state.loadingUser = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logOut.rejected, (state, { payload }) => {
        state.error = payload;
        state.loadingUser = false;
        state.token = null;
      });

    // .addCase(refreshToken.pending, (state) => {
    //   state.error = null;
    //   state.loadingUser = true;
    // })
    // .addCase(refreshToken.fulfilled, (state, { payload }) => {
    //   state.loadingUser = false;
    //   state.token = payload.id_token;
    //   state.refreshToken = payload.refresh_token;
    // })
    // .addCase(refreshToken.rejected, (state, { payload }) => {
    //   state.error = payload;
    //   state.loadingUser = false;
    //   state.token = null;
    //   state.refreshToken = null;
    // });
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
