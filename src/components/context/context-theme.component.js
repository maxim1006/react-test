import React from 'react';

const themes = {
    light: 'green',
    dark: 'blue',
};

const ThemeContext = React.createContext(themes.dark);
console.log(ThemeContext);
export default ThemeContext;
