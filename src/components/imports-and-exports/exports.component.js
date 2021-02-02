import React, { memo } from 'react';

const ExportsComponent = () => {
    return <>ExportsComponent</>;
};

const variable = 'variable';

// need the console.log for the example
// eslint-disable-next-line no-console
const exportsFunction = () => console.log(exportsFunction);

const renamedExport = {};

export {
    variable,
    exportsFunction,
    renamedExport as importsAndExportsRenamedObject,
};

export default memo(ExportsComponent);
