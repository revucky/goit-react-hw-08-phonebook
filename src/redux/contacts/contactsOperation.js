import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const ENDPOINT = "contacts";

const getContact = createAsyncThunk("contacts/getContactStatus", async () => {
  const res = await api.getData(ENDPOINT);
  return res;
});

const createContacts = createAsyncThunk(
  "contacts/createContactsStatus",
  (newContact) => api.addItem(ENDPOINT, newContact)
);

const deleteContacts = createAsyncThunk(
  "contacts/ddeleteContactsStatus",
  (id) => api.deleteItem(ENDPOINT, id)
);

export { getContact, createContacts, deleteContacts };
