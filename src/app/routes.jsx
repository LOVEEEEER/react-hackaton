import React from "react";
import { Navigate } from "react-router-dom";
import SignUpPage from "./components/pages/login/SignUpPage";
import DeveloperPage from "./components/pages/DeveloperPage";
import withStyledFormPage from "./components/ui/hoc/withStyledFormPage/withStyledFormPage";
import Login from "./layouts/Login";
import Main from "./layouts/Main";
import Developers from "./layouts/Developers";
import SignInPage from "./components/pages/login/SignInPage";
import Favourites from "./layouts/Favourites";

const StyledSignUpPage = withStyledFormPage(SignUpPage);
const StyledSignInPage = withStyledFormPage(SignInPage);

const routes = [
    {
        path: "",
        element: <Main />
    },
    {
        path: "developers",
        element: <Developers />,
        children: [
            {
                path: "",
                element: <Navigate to="/" />
            },
            {
                path: ":developerId",
                element: <DeveloperPage />
            }
        ]
    },
    { path: "bookmark", element: <Favourites /> },
    {
        path: "*",
        element: <Navigate to="/" />
    },
    {
        path: "login",
        element: <Login />,
        children: [
            {
                path: "",
                element: <Navigate to="/" />
            },
            {
                path: "signup",
                element: <StyledSignUpPage />
            },
            {
                path: "signin",
                element: <StyledSignInPage />
            }
        ]
    }
];

export default routes;
