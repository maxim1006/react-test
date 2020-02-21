import React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from "./components/link/Link";

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
    const links = [
        {href: "/", text: "link"},
        {href: "/", text: "link"},
        {href: "/", text: "link"},
        {href: "/", text: "link"},
    ];

    return (
        <nav className="top-navbar">
            {links.map((link, index) => <Link key={index} {...link} />)}
        </nav>
    );
};
