import React from "react";
import "./app.component.scss";
import Header from "./components/header/header.component";
import List from "./components/list/list.component";

function AppComponent() {
  return (
    <div className="App">
      <Header />

      <main>
        Hello world text
        <List>
          <li>123</li>
          <li>456</li>
          <li>789</li>
        </List>
      </main>
    </div>
  );
}

export default AppComponent;
