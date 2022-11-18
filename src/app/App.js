import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import Navbar from "./layouts/navbar/navbar";
import routes from "./routes";
import { loadUsers } from "./store/slices/users";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsers());
    }, []);
    const elements = useRoutes(routes);
    return (
        <>
            <Navbar /> {elements}
        </>
    );
}

export default App;
