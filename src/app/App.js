import React from "react";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import routes from "./routes";

function App() {
    const elements = useRoutes(routes);
    return (
        <>
            <Navbar />
            {elements}
        </>
    );
}

export default App;
