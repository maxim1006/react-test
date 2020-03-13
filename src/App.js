import React, {useEffect, useState} from 'react';
import './App.css';
import {Link as Test} from "./components/link/Link";
import LinkClass from "./components/link/LinkClass";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello my app! <br/>
//           Edit <code>src/App.ajs</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

export default () => {
    const linkData = {href: "/", text: "link", id: 1};
    const links = [];

    let [data, setData] = useState(links);

    const onClick = async () => {
        const data = await import("./components/link/DynamicInfo.js");
        console.log(data.default);
    };

    useEffect(() => {
        setInterval(() => {
            if (links.length > 5) {
                setData([
                    {href: "/", text: "link", id: 1},
                    {href: "/", text: "link", id: 2},
                    {href: "/", text: "link", id: 3}
                ]);
            } else {
                const id = linkData.id = ++linkData.id;
                const newLinkData = {...linkData, id};

                data.push(newLinkData);

                setData([...links]);
            }
        }, 3000);
    }, []);

    return (
        <nav className="top-navbar"
            onClick={onClick}
        >
            {data.map((link, index) => {

                return (
                    <div key={link.id}>
                        <Test {...link} />
                    </div>
                );

            })}

            { <LinkClass />}
        </nav>
    );
};
