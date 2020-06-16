export const getWindowCoords: any = () => ({
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight,
});

export const isMobileScreen: any = () => {
    return document.documentElement.clientWidth < 768;
};
