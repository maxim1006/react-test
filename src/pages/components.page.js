import React from 'react';
import ImportsComponent from '../components/imports-and-exports/imports.component';

const ComponentsPage = () => {
    const onSubmit = (...args) => {
        console.log(args);
    };

    return (
        <>
            <div>
                <h3>Imports and exports</h3>
                <ImportsComponent />
            </div>

            {/*<div>*/}
            {/*    <h3>Context example</h3>*/}
            {/*    <ContextParentComponent />*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <h3>Parent child interaction</h3>*/}
            {/*    <ParentComponent />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>Parent Child component</h3>*/}
            {/*    <Bem />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Bem />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>RtForm</h3>*/}
            {/*    <RtForm />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>RtFormAlternative</h3>*/}
            {/*    <RtFormAlternative onSubmit={onSubmit} />*/}
            {/*</div>*/}
        </>
    );
};

export default ComponentsPage;
