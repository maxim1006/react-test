import { useState, useEffect } from 'react';

interface WindowSizeHookModel {
    width: number;
    height: number;
}

const getWindowDimensions = (): WindowSizeHookModel => {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height,
    };
};

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<
        WindowSizeHookModel
    >(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
