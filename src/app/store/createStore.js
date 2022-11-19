import { configureStore, combineReducers } from "@reduxjs/toolkit";
import qualitiesReducer from "./slices/qualities";
import usersReducer from "./slices/users";

const rootReducer = combineReducers({
    users: usersReducer,
    qualities: qualitiesReducer
});

export function createStore() {
    return configureStore({ reducer: rootReducer });
}
