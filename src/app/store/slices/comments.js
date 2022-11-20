import { createSlice } from "@reduxjs/toolkit";
import commentsService from "../../services/comments.service";

const initialState = {
    entities: null,
    error: null,
    isLoading: true
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        requested(state, action) {
            state.isLoading = true;
        },
        received(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        loadFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        requestFailed(state, action) {
            state.error = action.payload;
        },
        created(state, action) {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        deleted(state, action) {
            state.entities = state.entities.filter(
                (comment) => comment.id !== action.payload
            );
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const { requested, received, loadFailed, created, requestFailed, deleted } =
    actions;

export const loadComments = (pageId) => async (dispatch, getState) => {
    dispatch(requested());
    try {
        const { content } = await commentsService.get(pageId);
        dispatch(received(content));
    } catch (error) {
        dispatch(loadFailed(error.message));
    }
};

export const deleteComment = (commentId) => async (dispatch) => {
    try {
        await commentsService.delete(commentId);
        dispatch(deleted(commentId));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getComments = () => (state) => state.comments.entities;

export const createComment = (comment) => async (dispatch) => {
    try {
        await commentsService.create(comment.id, comment);
        dispatch(created(comment));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export default commentsReducer;
