import TYPES from "./contactsTypes";

// const createContacts = (contacts) => ({
//   type: TYPES.CREATE,
//   payload: contacts,
// });
// const deleteContacts = (contacts) => ({
//   type: TYPES.DELETE,
//   payload: contacts,
// });
// const changeFilter = (value) => ({
//   type: TYPES.FILTER,
//   payload: value,
// });

// export { createContacts, deleteContacts, changeFilter };

export const createContacts = (contact) => ({
  type: TYPES.CREATE,
  payload: contact,
});
export const deleteContacts = (id) => ({
  type: TYPES.DELETE,
  payload: id,
});
export const changeFilter = (value) => ({
  type: TYPES.FILTER,
  payload: value,
});
