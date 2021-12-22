import { combineReducers } from "redux";
import TYPES from "./contactsTypes";
// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
const cont = [{ id: "1", name: "Тато", number: "09384755" }];

const itemsReducer = (state = cont, action) => {
  switch (action.type) {
    case TYPES.CREATE:
      return [...state, action.payload];
    case TYPES.DELETE:
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};
const filterReducer = (state = "", action) => {
  switch (action.type) {
    case TYPES.FILTER:
      return action.payload;

    default:
      return state;
  }
};
const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
