import { useEffect, useState } from 'react';

const ThemeContextHook = () => {
    const [themeContextValue, setThemeContextValue] = useState('dark');

    useEffect(() => {
        document.body.classList.add(`_dark`);
    }, []);

    const changeThemeContextValue = themeValue => {
        setThemeContextValue(themeValue);

        document.body.classList.remove(`_dark`, `_light`);
        document.body.classList.add(`_${themeValue}`);
    };

    return {
        themeContextValue,
        changeThemeContextValue,
    };
};

export default ThemeContextHook;
