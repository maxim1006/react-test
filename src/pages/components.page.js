import React from 'react';
// import ConsoleLog from '../components/console/console-log.component';
import ButtonExample from '../components/button/button-example';
import CenterElement from '../components/center-element/center-element';
import GradientElement from '../components/gradient/gradient-element';
import ImageMaxWidth from '../components/image-max-width/image-max-width-element';
import SmoothScrolling from '../components/smooth-scrolling/smooth-scrolling';
import StickyElement from '../components/sticky-element/sticky-element';

const ComponentsPage = () => {
    return (
        <>
            <div>
                <h3>Button with no appearance</h3>

                <ButtonExample />

                <h3>Gradient that works in Safari</h3>

                <GradientElement />

                <h3>Sticky element</h3>

                <StickyElement />

                <h3>Max width image</h3>

                <ImageMaxWidth />

                <h3>Smooth scrolling</h3>
                <SmoothScrolling />

                <h3>Center element (copied this from Angular)</h3>
                <CenterElement />
            </div>

            {/* <div> */}
            {/*    <h3>Environment</h3>*/}
            {/*    <EnvExample />*/}
            {/* </div> */}

            {/* <div>*/}
            {/*    <h3>Imports and exports</h3>*/}
            {/*    <ImportsComponent />*/}
            {/* </div>*/}

            {/* <div>*/}
            {/*    <h3>Context example</h3>*/}
            {/*    <ContextParentComponent />*/}
            {/* </div>*/}

            {/* <div>*/}
            {/*    <h3>Parent child interaction</h3>*/}
            {/*    <ParentComponent />*/}
            {/* </div>*/}
            {/* <div>*/}
            {/*    <h3>Parent Child component</h3>*/}
            {/*    <Bem />*/}
            {/* </div>*/}
            {/* <div>*/}
            {/*    <Bem />*/}
            {/* </div>*/}
            {/* <div>*/}
            {/*    <h3>RtForm</h3>*/}
            {/*    <RtForm />*/}
            {/* </div>*/}
            {/* <div>*/}
            {/*    <h3>RtFormAlternative</h3>*/}
            {/*    <RtFormAlternative onSubmit={onSubmit} />*/}
            {/* </div>*/}
        </>
    );
};

export default ComponentsPage;
