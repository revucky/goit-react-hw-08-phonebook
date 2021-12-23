import { createSlice } from "@reduxjs/toolkit";
import {
  getContact,
  createContacts,
  deleteContacts,
} from "./contactsOperation";
const initialState = {
  data: {
    items: [],
    loading: false,
    error: null,
  },
  filter: "",
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // getContact: (state, { payload }) => ({ ...state, items: payload }),
    // createContacts: (state, { payload }) => ({
    //   ...state,
    //   items: [...state.items, payload],
    // }),
    // deleteContacts: (state, { payload }) => ({
    //   ...state,
    //   items: state.items.filter((contact) => contact.id !== payload),
    // }),
    changeFilter: (state, { payload }) => ({ ...state, filter: payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContact.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getContact.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.items = payload;
      })
      .addCase(getContact.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })
      // add
      .addCase(createContacts.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(createContacts.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        // state.data.items.push(payload);
        state.data.items = [...state.data.items, payload];
      })
      .addCase(createContacts.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })
      //delete
      .addCase(deleteContacts.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        const inx = state.data.items.findIndex(
          (cont) => cont.id === payload.id
        );
        state.data.items.splice(inx, 1);
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });
  },
});
export default contactsSlice;

// export const { createContacts, deleteContacts, changeFilter } =
//   contactsSlice.actions;
// export default contactsSlice.reducers;

// import { createSlice, combineReducers } from "@reduxjs/toolkit";

// const itemsSlice = createSlice({
//   name: "items",
//   initialState: [],
//   reducer: {
// createContacts: (state, action) => [...state, action.payload],
// deleteContacts: (state, action) =>
//   state.filter((contact) => contact.id !== action.payload),
//   },
// });

// const filterSlice = createSlice({
//   name: "filter",
//   initialState: "",
//   reducer: {
//     changeFilter: (_, action) => action.payload,
//   },
// });
// export const { createContacts, deleteContacts } = itemsSlice.actions;
// export const { changeFilter } = filterSlice.actions;

// const contactsReducer = combineReducers({
//   [itemsSlice.name]: itemsSlice.reducer,
//   [filterSlice.name]: filterSlice.reducer,
// });
// export default contactsReducer;
