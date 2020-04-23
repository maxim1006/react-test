import React, {Suspense} from "react";
import "./app.component.scss";
import {NavLink, Route, Router, Switch} from "react-router-dom";
import history from "./history";
import NotFound from "./components/not-found/not-found.component";
import HomePage from "./pages/home.page";


const ComponentsPage = React.lazy(() => import('./pages/components.page'));
const ReduxPage = React.lazy(() => import('./pages/redux.page'));
const HooksPage = React.lazy(() => import('./pages/hooks.page'));


function AppComponent() {

    return (
        <>
            <Router history={history}>
                <div className="app">
                    <div className="nav-menu">
                        <NavLink
                            strict
                            exact
                            to="/"
                            activeClassName="_active"
                            className="main-menu__link"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            strict
                            exact
                            to="/components"
                            activeClassName="_active"
                            className="main-menu__link"
                        >
                            Components
                        </NavLink>
                        <NavLink
                            strict
                            exact
                            to="/redux"
                            activeClassName="_active"
                            className="main-menu__link"
                        >
                            Redux
                        </NavLink>
                        <NavLink
                            strict
                            exact
                            to="/hooks"
                            activeClassName="_active"
                            className="main-menu__link"
                        >
                            Hooks
                        </NavLink>
                    </div>

                    <main className="app__main">
                        <Suspense fallback={() => "Loading"}>
                            {/*покажет только первый найденный роут*/}
                            <Switch>
                                <Route path="/components" component={ComponentsPage}/>
                                <Route path="/redux" component={ReduxPage}/>
                                <Route path="/hooks" component={HooksPage}/>
                                <Route path="/" component={HomePage}/>
                                <Route path="*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </Suspense>
                    </main>
                </div>
            </Router>
        </>
    );
}

export default AppComponent;
