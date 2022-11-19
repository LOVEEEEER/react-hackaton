import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { getQualitiesLoading, loadQualities } from "./store/slices/qualities";
import { getUsersLoading, loadUsers } from "./store/slices/users";

function App() {
    const dispatch = useDispatch();
    const qualitiesLoading = useSelector(getQualitiesLoading());
    const usersLoading = useSelector(getUsersLoading());
    useEffect(() => {
        dispatch(loadUsers());
        dispatch(loadQualities());
    }, []);
    const elements = useRoutes(routes);
    if (!qualitiesLoading && !usersLoading) {
        return <>{elements}</>;
    }
}

export default App;
