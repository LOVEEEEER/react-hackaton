import { createSlice } from "@reduxjs/toolkit";
import qualitiesService from "../../services/qualities.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const qualitiesSlice = createSlice({
    name: "qualities",
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

const { reducer: qualitiesReducer, actions } = qualitiesSlice;
const { requested, received, requestFailed } = actions;

export const loadQualities = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await qualitiesService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getQualitiesListById = (qualitiesIds) => (state) => {
    const qualities = [];
    for (const qualityId of qualitiesIds) {
        for (const quality of state.qualities.entities) {
            if (qualityId === quality.id) {
                qualities.push(quality);
            }
        }
    }
    return qualities;
};

export const getQualitiesLoading = () => (state) => {
    return state.qualities.isLoading;
};

export default qualitiesReducer;
