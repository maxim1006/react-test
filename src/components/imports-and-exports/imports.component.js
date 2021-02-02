import React, { memo } from 'react';
import exportsComponent, {
    variable,
    exportsFunction,
    importsAndExportsRenamedObject as renamedExport,
} from './exports.component';

const ImportsComponent = () => {
    // we need the following 4 outputs for the example
    // eslint-disable-next-line no-console
    console.log(exportsComponent);
    // eslint-disable-next-line no-console
    console.log(variable);
    // eslint-disable-next-line no-console
    console.log(exportsFunction);
    // eslint-disable-next-line no-console
    console.log(renamedExport);

    return <>ImportsComponent</>;
};

export default memo(ImportsComponent);
