import React from 'react';
import './app.component.scss';
import Header from "./components/header/header.component";

function AppComponent() {
    return (
        <div className="App">
            <Header />

            <main>
                Hello world text
            </main>
        </div>

    );
}

export default AppComponent;

