import React from "react";
import "./app.component.scss";
import Header from "./components/header/header.component";
import List from "./components/list/list.component";
import { Tab, Tabs } from "./components/tabs/tab.component";

function AppComponent() {
    return (
        <div className="App">
            <Header />

            <main>
                Hello world text
                <List>
                    <li className="list__item">123</li>
                    Some other text
                </List>
                <Tabs defaultIndex={1}>
                    <Tab label="One">
                        <p>First tab</p>
                    </Tab>
                    <Tab label="Two">
                        <p>Second tab</p>
                    </Tab>
                    <Tab label="Three">
                        <p>Third tab</p>
                    </Tab>
                </Tabs>
            </main>
        </div>
    );
}

export default AppComponent;
