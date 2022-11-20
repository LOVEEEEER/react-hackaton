import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./components/pages/loginPage/login";
import UserPage from "./components/pages/UserPage";
import Main from "./layouts/Main";
import Users from "./layouts/Users";

const routes = [
    {
        path: "",
        element: <Main />
    },
    {
        path: "users",
        element: <Users />,
        children: [
            {
                path: "",
                element: <Navigate to="/" />
            },
            {
                path: ":userId",
                element: <UserPage />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/" />
    },
    {
        path: "login",
        element: <Login />
    }
];

export default routes;
