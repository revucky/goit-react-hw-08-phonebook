import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const ENDPOINT = "contacts";

const getContact = createAsyncThunk("contacts/getContactStatus", async () => {
  const { data } = await api.getData(ENDPOINT);
  return data;
});

const createContacts = createAsyncThunk(
  "contacts/createContactsStatus",
  async (newContact) => {
    const { data } = await api.addItem(ENDPOINT, newContact);
    return data;
  }
);

const deleteContacts = createAsyncThunk(
  "contacts/deleteContactsStatus",
  async (id) => {
    await api.deleteItem(ENDPOINT, id);
    return id;
  }
);

export { getContact, createContacts, deleteContacts };
