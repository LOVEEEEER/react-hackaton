import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AppLoader from "./components/ui/hoc/AppLoader";

function App() {
    const elements = useRoutes(routes);
    return <AppLoader>{elements}</AppLoader>;
}

export default App;
