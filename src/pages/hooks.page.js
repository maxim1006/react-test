import React from 'react';
import UseRef from '../hooks/use-ref/use-ref.component';

const HooksPage = () => {
    // const { themeContextValue, changeThemeContextValue } = useContext(
    //     ThemeContext
    // );

    return (
        <>
            <h3>Use state</h3>
            <UseRef />
            {/*<UseEffect />*/}
            {/*<UseState />*/}
            {/*<UseGetRequest />*/}

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
