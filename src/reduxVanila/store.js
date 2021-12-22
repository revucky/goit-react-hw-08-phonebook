import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
