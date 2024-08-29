import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authReducer from "./slices/userSlice";
import toastReducer from "./slices/toastSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    toast: toastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
