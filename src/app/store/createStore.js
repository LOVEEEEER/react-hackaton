import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./slices/users";

const rootReducer = combineReducers({
    users: usersReducer
});

export function createStore() {
    return configureStore({ reducer: rootReducer });
}
