import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import commentsReducer from "./slices/comments";
import developersReducer from "./slices/developers";
import favouritesReducer from "./slices/favourites";
import qualitiesReducer from "./slices/qualities";

const rootReducer = combineReducers({
    developers: developersReducer,
    qualities: qualitiesReducer,
    auth: authReducer,
    favourites: favouritesReducer
    comments: commentsReducer
});

export function createStore() {
    return configureStore({ reducer: rootReducer });
}
