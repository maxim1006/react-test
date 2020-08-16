import React, { memo } from 'react';

const ExportsComponent = () => {
    return <>ExportsComponent</>;
};

const variable = 'variable';

const exportsFunction = () => console.log(exportsFunction);

const renamedExport = {};

export {
    variable,
    exportsFunction,
    renamedExport as importsAndExportsRenamedObject,
};

export default memo(ExportsComponent);
