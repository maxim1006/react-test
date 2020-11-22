import React, { useContext } from 'react';
import ThemeContext from '../context/theme.context';
import Popover from '../components/popovers/popover-component';
import UseState from '../hooks/use-state/use-state.component';
import UseGetRequest from '../hooks/use-get-request/use-get-request.component';

const HooksPage = () => {
    const { themeContextValue, changeThemeContextValue } = useContext(
        ThemeContext
    );

    return (
        <>
            <h3>Use state</h3>
            <UseState />
            <UseGetRequest />

            {/*<div>Hooks Page Theme context value {themeContextValue}</div>*/}
            {/*<select*/}
            {/*    onChange={event => {*/}
            {/*        changeThemeContextValue(event.target.value);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <option value="dark">Dark theme</option>*/}
            {/*    <option value="light">Light theme</option>*/}
            {/*</select>*/}
            {/*<Popover>{themeContextValue}</Popover>*/}
        </>
    );
};

export default HooksPage;
