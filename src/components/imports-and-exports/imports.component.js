import React, { memo } from 'react';
import exportsComponent, {
    variable,
    exportsFunction,
    importsAndExportsRenamedObject as renamedExport,
} from './exports.component';

const ImportsComponent = () => {
    console.log(exportsComponent);
    console.log(variable);
    console.log(exportsFunction);
    console.log(renamedExport);

    return <>ImportsComponent</>;
};

export default memo(ImportsComponent);
