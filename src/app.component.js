import React from "react";
import "./app.component.scss";
import List from "./components/list/list.component";
import Tabs from "./components/tabs/tabs.component";

function AppComponent() {
    return (
        <main className="app">
            <Tabs>
                <div tabName="Components">
                    <List></List>
                </div>
                <div tabName="JSX">
                    JSX examples
                </div>
                <div tabName="Routing">
                    Routing examples
                </div>
                <div tabName="Forms">
                    Forms examples
                </div>
                <div tabName="Styling">
                    Styling examples
                </div>
                <div tabName="Redux">
                    Redux examples
                </div>
                <div tabName="Animations">
                    Animations examples
                </div>
            </Tabs>
        </main>
    );
}

export default AppComponent;
