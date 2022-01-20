import React from "react";
import ReactDom from "react-dom"
import { HashRouter } from "react-router-dom"
// provider - React Context API
// HashRouter - good from Scrimba
// BrowserRouter - use this one in your applications!

import App from "./components/App"

import runServer from "./api";
runServer();

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);