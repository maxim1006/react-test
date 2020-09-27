import React, { useContext } from 'react';
import ThemeContext from '../context/theme.context';
import Popover from '../components/popovers/popover-component';

const HooksPage = () => {
    const { themeContextValue, changeThemeContextValue } = useContext(
        ThemeContext
    );

    return (
        <>
            <div>Hooks Page Theme context value {themeContextValue}</div>
            <select
                onChange={event => {
                    changeThemeContextValue(event.target.value);
                }}
            >
                <option value="dark">Dark theme</option>
                <option value="light">Light theme</option>
            </select>
            <Popover>{themeContextValue}</Popover>
        </>
    );
};

export default HooksPage;
