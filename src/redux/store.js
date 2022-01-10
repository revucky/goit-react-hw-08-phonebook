import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/AuthSlice";
import contactsAction from "./contacts";

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
];

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};
const contactPersistConfig = {
  key: "contact",
  storage,
  whitelist: ["items"],
  blacklist: ["filter"],
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactsAction.reducer),
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);

// // import { createStore, combineReducers } from "redux";
// // import { devToolsEnhancer } from "redux-devtools-extension";
// import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
// // import thunk from "redux-thunk";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import contactsAction from "./contacts";

// // const rootReducer = combineReducers({
// //   contacts: contactsReducer,
// // });
// // const store = createStore(rootReducer, devToolsEnhancer());
// const persistConfig = {
//   key: "contact",
//   storage,
//   blacklist: ["filter"],
//   whitelist: ["items"],
// };

// const logger = createLogger({
//   collapsed: (getState, action, logEntry) => !logEntry.error,
//   timestamp: false,
// });

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(persistConfig, contactsAction.reducer),
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
//   devTools: process.env.NODE_ENV !== "production",
// });
// const persistor = persistStore(store);

// export { store, persistor };
