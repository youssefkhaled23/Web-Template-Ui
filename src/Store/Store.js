import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedConfig = {
  key: "root",
  storage,
  whiteList: ["cart", "auth"],
};

// const authRootConfig = {
//   key: "auth",
//   storage,
//   whiteList: ["user", "accessToken"],
// };

// const cartRootConfig = {
//   key: "cart",
//   storage,
//   whiteList: ["items"],
// };

const rootReducers = combineReducers({});

const persistedReducer = persistReducer(persistedConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST],
      },
    });
  },
});

const persistor = persistStore(store);

export { store, persistor };
