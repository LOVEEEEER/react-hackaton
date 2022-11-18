import { createSlice } from "@reduxjs/toolkit";
import usersService from "../../services/users.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const usersSlice = createSlice({
    name: "users",
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

const { reducer: usersReducer, actions } = usersSlice;
const { requested, received, requestFailed } = actions;

export const loadUsers = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await usersService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getUserById = (id) => (state) => {
    return state.users.entities
        ? state.users.entities.find((user) => user.id === id)
        : null;
};

export default usersReducer;
