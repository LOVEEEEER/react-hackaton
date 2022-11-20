import { createSlice } from "@reduxjs/toolkit";
import developersService from "../../services/developers.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const developersSlice = createSlice({
    name: "developers",
    initialState,
    reducers: {
        requested(state) {
            state.isLoading = true;
        },
        requestFailed(state, action) {
            state.error = action.payload;
        },
        received(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: developersReducer, actions } = developersSlice;
const { requested, received, requestFailed } = actions;

export const loadDevelopers = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await developersService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getDevelopersList = () => (state) => {
    return state.developers.entities ? state.developers.entities : null;
};

export const getDeveloperById = (id) => (state) => {
    return state.developers.entities
        ? state.developers.entities.find((developer) => developer.id === id)
        : null;
};

export const getDevelopersLoading = () => (state) => {
    return state.developers.isLoading;
};

export default developersReducer;
