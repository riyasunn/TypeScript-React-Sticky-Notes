import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: combineReducers({})
});

export type StoreDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;