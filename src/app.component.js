import React, { Suspense } from "react";
import "./app.component.scss";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import NotFound from "./components/not-found/not-found.component";
import HomePage from "./pages/home.page";
import NavMenu from "./components/nav-menu/nav-menu.component";
import SuspenseComponent from "./components/suspense/suspense.component";
import { navMenuLinks } from "./components/data/nav-menu.data";

const ComponentsPage = React.lazy(() => import("./pages/components.page"));
const ReduxPage = React.lazy(() => import("./pages/redux.page"));
const HooksPage = React.lazy(() => import("./pages/hooks.page"));

// TODO memo() for all components
function AppComponent() {
    return (
        <>
            <Router history={history}>
                <div className="app">
                    {/* TODO add links input to the NavMenu (links={links})*/}
                    <NavMenu links={navMenuLinks} />

                    <main className="app__main">
                        <Suspense fallback={<SuspenseComponent />}>
                            {/*покажет только первый найденный роут*/}
                            <Switch>
                                <Route
                                    path="/components"
                                    component={ComponentsPage}
                                />
                                <Route path="/redux" component={ReduxPage} />
                                <Route path="/hooks" component={HooksPage} />
                                <Route path="/" component={HomePage} />
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

//if I remember correctly, this is one of those that we shouldn't memoize
