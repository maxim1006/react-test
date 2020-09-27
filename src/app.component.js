import React, { Suspense } from 'react';
import styles from './app.module.scss';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import NotFound from './components/not-found/not-found.component';
import HomePage from './pages/home.page';
import NavMenu from './components/nav-menu/nav-menu.component';
import SuspenseComponent from './components/suspense/suspense.component';
import { navMenuLinks } from './components/data/nav-menu.data';
import ThemeContext from './context/theme.context';
import AppContext from './context/app.context';
import ThemeContextHook from './hooks/theme-context.hook';
import AppContextHook from './hooks/app-context.hook';

const ComponentsPage = React.lazy(() => import('./pages/components.page'));
const ReduxPage = React.lazy(() => import('./pages/redux.page'));
const HooksPage = React.lazy(() => import('./pages/hooks.page'));

// TODO memo() for all components
function App() {
    const { themeContextValue, changeThemeContextValue } = ThemeContextHook();
    const appInfo = AppContextHook();

    return (
        <>
            <AppContext.Provider value={appInfo}>
                <ThemeContext.Provider
                    value={{ themeContextValue, changeThemeContextValue }}
                >
                    <Router history={history}>
                        <div className={styles.app}>
                            {/* TODO add links input to the NavMenu (links={links})*/}
                            <NavMenu links={navMenuLinks} />

                            <main className={styles.appMain}>
                                <Suspense fallback={<SuspenseComponent />}>
                                    {/* покажет только первый найденный роут*/}
                                    <Switch>
                                        <Route
                                            path="/components"
                                            component={ComponentsPage}
                                        />
                                        <Route
                                            path="/redux"
                                            component={ReduxPage}
                                        />
                                        <Route
                                            path="/hooks"
                                            component={HooksPage}
                                        />
                                        <Route path="/" component={HomePage} />
                                        <Route path="*">
                                            <NotFound />
                                        </Route>
                                    </Switch>
                                </Suspense>
                            </main>
                        </div>
                    </Router>
                </ThemeContext.Provider>
            </AppContext.Provider>
        </>
    );
}

export default App;
