import React, {useState} from "react";
import "./app.component.scss";
import List from "./components/list/list.component";
import JSX from "./components/jsx/jsx.component";
import Tabs from "./components/tabs/tabs.component";
import Tab from "./components/tabs/tab.component";

function AppComponent() {
    const [tabsArray, setTabsArray] = useState([
        {
            name: "Components",
            body: (<List />)
        },
        {
            name: "JSX",
            body: (<JSX/>)
        },
        {
            name: "Routing",
            body: "Routing examples"
        }, {
            name: "Forms",
            body: "Forms examples"
        }, {
            name: "Styling",
            body: "Styling examples"
        }, {
            name: "Routing",
            body: "Routing examples"
        }]
    );

    const onButtonClick = () => {
        tabsArray.pop();
        setTabsArray([...tabsArray]);
    };

    const getTabsView = (() => {
        return (
            tabsArray.map(({name, body}, index) => (
                <Tab key={index} tabName={name}>
                    {body}
                </Tab>
            ))
        );
    })();

    return (
        <>
            <button type="button" onClick={onButtonClick}>remove tab</button>
            <main className="app">
                <Tabs activeTab={1}>
                    {[...getTabsView]}
                </Tabs>
            </main>
        </>
    );
}

export default AppComponent;
