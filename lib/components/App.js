
import React, { useState } from "react";
import { Switch, };
import NavBar from "./NavBar";

import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

/*Client Side Routing
- URLs

//install this to get react router
//importation happens with React
npm install react-router-dom
https://reactrouter.com/web/guides/quick-start

// -REST - REpresentation State Transfer
*/
function App() {
    const [page, setPage] = useState("/")

    return ( 
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <ProjectList />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    );
}


/*     function getCurrentPage() {
        switch(page) {
            case "/";
                return <Home />
            case "/about":
                return <About />
            case "/projects":
                return <ProjectList />
            default:
                return <h1>404 not found</h1>
        }
    }

    return (
        <div>
            <NavBar onChangePage={setPage} />
            {getCurrentPage()}
        </div>
    );*/



export default App; 