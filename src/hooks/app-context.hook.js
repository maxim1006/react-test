import { useEffect, useState } from 'react';
import Bowser from 'bowser';
import throttle from 'lodash/throttle';

// helper
function getDevice(documentWidth) {
    if (documentWidth < 768) return 'phone';
    if (documentWidth > 768 && documentWidth < 992) return 'laptop';
    if (documentWidth > 992) return 'desktop';
    return 'no information found';
}

const AppContextHook = () => {
    const [appInfo, setAppInfo] = useState();

    useEffect(() => {
        const {
            parsedResult: { browser, os },
        } = Bowser.getParser(window.navigator.userAgent);

        const updateAppInfo = () => {
            const { clientWidth, clientHeight } = document.documentElement;

            setAppInfo({
                clientWidth,
                clientHeight,
                browser: `Browser: ${browser.name} OS: ${os.name}`,
                currentDeviceType: getDevice(clientWidth), // ('desktop', 'tablet', 'mobile')
            });
        };

        const updateInfoDebounced = throttle(updateAppInfo, 1000);

        window.addEventListener('resize', updateInfoDebounced);

        updateAppInfo();

        return () => window.removeEventListener('resize', updateInfoDebounced);
    }, []);

    return appInfo;
};

export default AppContextHook;
