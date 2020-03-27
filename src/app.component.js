import React from "react";
import "./app.component.scss";
import Header from "./components/header/header.component";
import List from "./components/list/list.component";

function AppComponent() {
    return (
        <div className="App">
            <Header/>

            <main>
                Hello world text
                <List>
                    <li className="list__item">123</li>
                    Some other text
                </List>
            </main>
        </div>
    );
}

export default AppComponent;
