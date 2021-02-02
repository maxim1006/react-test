import React from 'react';
import UseRef from '../hooks/use-ref/use-ref.component';
import useWindowDimensions from '../hooks/use-window-size/use-window-size.hook';

const HooksPage = () => {
    // const { themeContextValue, changeThemeContextValue } = useContext(
    //     ThemeContext
    // );
    const { height, width } = useWindowDimensions();
    return (
        <>
            <h3>Use state</h3>
            <UseRef />
            <h2>
                width:{width} height:{height}
            </h2>
            {/* <UseEffect />*/}
            {/* <UseState />*/}
            {/* <UseGetRequest />*/}

            {/* <div>Hooks Page Theme context value {themeContextValue}</div>*/}
            {/* <select*/}
            {/*    onChange={event => {*/}
            {/*        changeThemeContextValue(event.target.value);*/}
            {/*    }}*/}
            {/* >*/}
            {/*    <option value="dark">Dark theme</option>*/}
            {/*    <option value="light">Light theme</option>*/}
            {/* </select>*/}
            {/* <Popover>{themeContextValue}</Popover>*/}
        </>
    );
};

export default HooksPage;
