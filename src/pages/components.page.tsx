import React from 'react';
import ParentComponent from '../components/parent/parent.component';
import RtFormAlternative from '../components/form/form-alternative.component';

const ComponentsPage: any = () => {
    return (
        <>
            <div>
                <h3>Parent child interaction</h3>
                <ParentComponent />
            </div>
            {/*<div>*/}
            {/*    <h3>Parent Child component</h3>*/}
            {/*    <Bem />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Bem />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <RtForm />*/}
            {/*</div>*/}
            <RtFormAlternative />
        </>
    );
};

export default ComponentsPage;
