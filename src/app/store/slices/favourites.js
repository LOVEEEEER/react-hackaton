import { createAction, createSlice } from "@reduxjs/toolkit";
import favouritesService from "../../services/favourites.service";

const initialState = {
    entities: [],
    isLoading: true,
    error: null
};
const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        favouritesRequested: (state) => {
            state.isLoading = true;
        },
        favouritesRecieved: (state, { payload }) => {
            state.entities = payload;
            state.isLoading = false;
        },
        favouritesRequestFailed: (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        },
        favouritesRemoved: (state, { payload }) => {
            state.entities = state.entities.filter(
                (item) => item.id !== payload
            );
        },
        favouritesCreated: (state, { payload }) => {
            state.entities.push(payload);
        }
    }
});

const favouritesRemoveRequested = createAction(
    "favourites/favouritesRemoveRequested"
);
const favouritesCreateRequested = createAction(
    "favourites/favouritesCreateRequested"
);
const favouritesRemoveRequestFailed = createAction(
    "favourites/favouritesRemoveRequestFailed"
);
const favouritesCreateRequestFailed = createAction(
    "favourites/favouritesCreateRequestFailed"
);

const { actions, reducer: favouritesReducer } = favouritesSlice;
const {
    favouritesRequested,
    favouritesRecieved,
    favouritesRequestFailed,
    favouritesCreated,
    favouritesRemoved
} = actions;

export const loadFavourites = (id) => async (dispatch) => {
    dispatch(favouritesRequested());
    try {
        const data = await favouritesService.get(id);
        dispatch(favouritesRecieved(data));
    } catch (error) {
        dispatch(favouritesRequestFailed(error.message));
    }
};
export const removeFavourite = (id) => async (dispatch) => {
    dispatch(favouritesRemoveRequested());
    try {
        const data = await favouritesService.delete(id);
        if (data === null) {
            dispatch(favouritesRemoved(id));
        }
    } catch (error) {
        dispatch(favouritesRemoveRequestFailed(error.message));
    }
};
export const createFavourite = (payload) => async (dispatch) => {
    dispatch(favouritesCreateRequested());
    try {
        const data = await favouritesService.create(payload);
        dispatch(favouritesCreated(data));
    } catch (error) {
        dispatch(favouritesCreateRequestFailed(error.message));
    }
};
export const getCurrentUserFavourite = (id) => (state) =>
    state.favourites.entities.find((item) => item.personId === id);
export const getFavourites = (state) => state.favourites.entities;
export const getFavouritesLoadingStatus = (state) => state.favourites.isLoading;
export default favouritesReducer;
