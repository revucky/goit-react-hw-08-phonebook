import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  filter: "",
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    createContacts: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    deleteContacts: (state, { payload }) => ({
      ...state,
      items: state.items.filter((contact) => contact.id !== payload),
    }),
    changeFilter: (state, { payload }) => ({ ...state, filter: payload }),
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
