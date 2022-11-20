import { createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import usersService from "../../services/users.service";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          userId: localStorageService.getLocalId(),
          isLoggedIn: true,
          signUpError: null,
          signInError: null,
          isLoading: true
      }
    : {
          entities: null,
          userId: null,
          isLoggedIn: false,
          signUpError: null,
          signInError: null,
          isLoading: true
      };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        usersRequested(state) {
            state.isLoading = true;
        },
        usersReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        usersRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess(state, action) {
            state.userId = action.payload;
        },
        authSignUpRequestFailed(state, action) {
            state.signUpError = action.payload;
        },
        authSignInRequestFailed(state, action) {
            state.signInError = action.payload;
        },
        userCreated(state, action) {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        }
    }
});

const { reducer: authReducer, actions } = authSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequestSuccess,
    authSignUpRequestFailed,
    authSignInRequestFailed,
    userCreated
} = actions;

export const loadUsers = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await usersService.fetchAll();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const signUp = (data, redirect) => async (dispatch) => {
    try {
        const content = await authService.signUp(data);
        dispatch(authRequestSuccess(content.localId));
        const newUser = {
            id: content.localId,
            name: data.name,
            created_at: Date.now(),
            email: data.email,
            image: `https://avatars.dicebear.com/api/avataaars/${(
                Math.random() + 1
            )
                .toString(36)
                .substring(7)}.svg`
        };
        dispatch(createUser(newUser));
        redirect("/", { replace: true });
    } catch (error) {
        dispatch(authSignUpRequestFailed(error.message));
    }
};

export const signIn = (data, redirect) => async (dispatch) => {
    try {
        const content = await authService.signIn(data);
        localStorageService.setTokens(content);
        dispatch(authRequestSuccess(content.localId));
        redirect("/", { replace: true });
    } catch (error) {
        dispatch(authSignInRequestFailed(error.message));
    }
};

function createUser(data) {
    return async function (dispatch) {
        const { content } = await usersService.createUser(data.id, data);
        dispatch(userCreated(content));
        return content;
    };
}

export const getCurrentUser = () => (state) => {
    return state.auth.entities
        ? state.auth.entities.find((user) => user.id === state.auth.userId)
        : null;
};
export const getIsLoading = () => (state) => state.auth.isLoading;
export const getIsLoggedIn = () => (state) => state.auth.isLoggedIn;
export default authReducer;