import React, { useContext } from 'react';
import ThemeContext from '.././components/context/context-theme.component';

const HooksPage = () => {
    let theme = useContext(ThemeContext);
    console.log(theme);

    const changeTheme = () => {
        theme = theme === 'blue' ? 'red' : 'blue';
        console.log(theme);
    };

    return (
        <>
            <ThemeContext.Provider value={theme.dark}>
                <div>Hooks Page {theme}</div>
                <button type="button" onClick={changeTheme}>
                    change-theme
                </button>
            </ThemeContext.Provider>
        </>
    );
};
export default HooksPage;
