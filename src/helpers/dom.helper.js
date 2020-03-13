export const getWindowCoords = () => ({
   w: document.documentElement.clientWidth,
   h: document.documentElement.clientHeight,
});

export const isMobileScreen = () => {
    return document.documentElement.clientWidth < 768;
};



