import axios from "axios";

// const BASE_URL = "https://connections-api.herokuapp.com/";

// const fetchData = async (path, options = {}) => {
//   const res = await fetch(`${BASE_URL}/${path}`, options);
//   return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
// };

const getData = (endpoint) => {
  return axios.get(endpoint);
};

const addItem = (endpoint, item = {}) => {
  return axios.post(endpoint, item);
};

const deleteItem = (endpoint, id) => axios.delete(`${endpoint}/${id}`);

export { getData, addItem, deleteItem };

// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// // Fetch requests

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// export async function fetchContacts() {
//   const { data } = await axios.get("/contacts");
//   return data;
// }

// export async function fetchAddContacts(contact) {
//   const { data } = await axios.post("/contacts", contact);
//   return data;
// }

// export async function fetchDeleteContact(id) {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// }

// // ++++++++++++++++++++++++++++++++++++++++

// export const addContactOperation = createAsyncThunk(
//   "contacts/addContact",
//   async ({ name, number }, { rejectWithValue }) => {
//     const contact = {
//       name,
//       number,
//     };
//     try {
//       const contacts = await fetchAddContacts(contact);
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const fetchContactsListOperation = createAsyncThunk(
//   "contacts/fetchContacts",
//   async () => {
//     const contacts = await fetchContacts();
//     return contacts;
//   }
// );

// export const deleteContactsOperation = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id) => {
//     const contacts = await fetchDeleteContact(id);
//     const newContacts = await fetchContacts();
//     return newContacts;
//   }
// );
