import React from "react";
import { useRoutes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import routes from "./routes";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
    const elements = useRoutes(routes);
    return <Global>{elements}</Global>;
}

export default App;
