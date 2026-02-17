import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import analysisReducer from "./slices/analysisSlice";

// Persist configuration
const persistConfig = {
  key: "root", // Key in localStorage
  storage, // Use localStorage
  whitelist: ["analysis"], // Only persist the analysis slice
};

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, analysisReducer);

export const store = configureStore({
  reducer: {
    analysis: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
