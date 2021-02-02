import { useEffect, useState } from 'react';

const ThemeContextHook = () => {
    const [themeContextValue, setThemeContextValue] = useState('dark');

    useEffect(() => {
        document.body.classList.add(`_dark`);

        return () => {
            // need this console.log for the example to make sense
            // eslint-disable-next-line no-console
            console.log('destroyed');
        };
    }, []);

    const changeThemeContextValue = themeValue => {
        setThemeContextValue(themeValue);

        document.body.classList.remove(`_dark`, `_light`);
        document.body.classList.add(`_${themeValue}`);
    };

    return {
        themeContextValue,
        changeThemeContextValue,
        setThemeContextValue,
    };
};

export default ThemeContextHook;
