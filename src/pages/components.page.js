import React from 'react';
import ParentComponent from '../components/parent/parent.component';
import RtFormAlternative from '../components/form/form-alternative.component';
import RtForm from '../components/form/form.component';
import ContextParentComponent from '../components/context/context-parent.component';

const ComponentsPage = () => {
    const onSubmit = (...args) => {
        console.log(args);
    };

    return (
        <>
            <div>
                <h3>Context example</h3>
                <ContextParentComponent />
            </div>

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
